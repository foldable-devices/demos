import { b as __extends, d as __assign, M as MDCFoundation, _ as __decorate, q as query, p as property, B as BaseElement, f as addHasRemoveClass, c as customElement } from '../common/foundation-cd2c4b5b.js';
import { h as html } from '../common/lit-html-c59f3c67.js';
import { c as css } from '../common/lit-element-5a8a23ff.js';
import { c as classMap } from '../common/class-map-88f70b4b.js';
import { o as observer } from '../common/observer-306f3f70.js';

/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(() => {
    var _a, _b, _c;
    /* Symbols for private properties */
    const _blockingElements = Symbol();
    const _alreadyInertElements = Symbol();
    const _topElParents = Symbol();
    const _siblingsToRestore = Symbol();
    const _parentMO = Symbol();
    /* Symbols for private static methods */
    const _topChanged = Symbol();
    const _swapInertedSibling = Symbol();
    const _inertSiblings = Symbol();
    const _restoreInertedSiblings = Symbol();
    const _getParents = Symbol();
    const _getDistributedChildren = Symbol();
    const _isInertable = Symbol();
    const _handleMutations = Symbol();
    class BlockingElementsImpl {
        constructor() {
            /**
             * The blocking elements.
             */
            this[_a] = [];
            /**
             * Used to keep track of the parents of the top element, from the element
             * itself up to body. When top changes, the old top might have been removed
             * from the document, so we need to memoize the inerted parents' siblings
             * in order to restore their inerteness when top changes.
             */
            this[_b] = [];
            /**
             * Elements that are already inert before the first blocking element is
             * pushed.
             */
            this[_c] = new Set();
        }
        destructor() {
            // Restore original inertness.
            this[_restoreInertedSiblings](this[_topElParents]);
            // Note we don't want to make these properties nullable on the class,
            // since then we'd need non-null casts in many places. Calling a method on
            // a BlockingElements instance after calling destructor will result in an
            // exception.
            const nullable = this;
            nullable[_blockingElements] = null;
            nullable[_topElParents] = null;
            nullable[_alreadyInertElements] = null;
        }
        get top() {
            const elems = this[_blockingElements];
            return elems[elems.length - 1] || null;
        }
        push(element) {
            if (!element || element === this.top) {
                return;
            }
            // Remove it from the stack, we'll bring it to the top.
            this.remove(element);
            this[_topChanged](element);
            this[_blockingElements].push(element);
        }
        remove(element) {
            const i = this[_blockingElements].indexOf(element);
            if (i === -1) {
                return false;
            }
            this[_blockingElements].splice(i, 1);
            // Top changed only if the removed element was the top element.
            if (i === this[_blockingElements].length) {
                this[_topChanged](this.top);
            }
            return true;
        }
        pop() {
            const top = this.top;
            top && this.remove(top);
            return top;
        }
        has(element) {
            return this[_blockingElements].indexOf(element) !== -1;
        }
        /**
         * Sets `inert` to all document elements except the new top element, its
         * parents, and its distributed content.
         */
        [(_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged)](newTop) {
            const toKeepInert = this[_alreadyInertElements];
            const oldParents = this[_topElParents];
            // No new top, reset old top if any.
            if (!newTop) {
                this[_restoreInertedSiblings](oldParents);
                toKeepInert.clear();
                this[_topElParents] = [];
                return;
            }
            const newParents = this[_getParents](newTop);
            // New top is not contained in the main document!
            if (newParents[newParents.length - 1].parentNode !== document.body) {
                throw Error('Non-connected element cannot be a blocking element');
            }
            // Cast here because we know we'll call _inertSiblings on newParents
            // below.
            this[_topElParents] = newParents;
            const toSkip = this[_getDistributedChildren](newTop);
            // No previous top element.
            if (!oldParents.length) {
                this[_inertSiblings](newParents, toSkip, toKeepInert);
                return;
            }
            let i = oldParents.length - 1;
            let j = newParents.length - 1;
            // Find common parent. Index 0 is the element itself (so stop before it).
            while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
                i--;
                j--;
            }
            // If up the parents tree there are 2 elements that are siblings, swap
            // the inerted sibling.
            if (oldParents[i] !== newParents[j]) {
                this[_swapInertedSibling](oldParents[i], newParents[j]);
            }
            // Restore old parents siblings inertness.
            i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i));
            // Make new parents siblings inert.
            j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
        }
        /**
         * Swaps inertness between two sibling elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_swapInertedSibling](oldInert, newInert) {
            const siblingsToRestore = oldInert[_siblingsToRestore];
            // oldInert is not contained in siblings to restore, so we have to check
            // if it's inertable and if already inert.
            if (this[_isInertable](oldInert) && !oldInert.inert) {
                oldInert.inert = true;
                siblingsToRestore.add(oldInert);
            }
            // If newInert was already between the siblings to restore, it means it is
            // inertable and must be restored.
            if (siblingsToRestore.has(newInert)) {
                newInert.inert = false;
                siblingsToRestore.delete(newInert);
            }
            newInert[_parentMO] = oldInert[_parentMO];
            newInert[_siblingsToRestore] = siblingsToRestore;
            oldInert[_parentMO] = undefined;
            oldInert[_siblingsToRestore] = undefined;
        }
        /**
         * Restores original inertness to the siblings of the elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_restoreInertedSiblings](elements) {
            for (const element of elements) {
                const mo = element[_parentMO];
                mo.disconnect();
                element[_parentMO] = undefined;
                const siblings = element[_siblingsToRestore];
                for (const sibling of siblings) {
                    sibling.inert = false;
                }
                element[_siblingsToRestore] = undefined;
            }
        }
        /**
         * Inerts the siblings of the elements except the elements to skip. Stores
         * the inerted siblings into the element's symbol `_siblingsToRestore`.
         * Pass `toKeepInert` to collect the already inert elements.
         * Sets the property `inert` over the attribute since the inert spec
         * doesn't specify if it should be reflected.
         * https://html.spec.whatwg.org/multipage/interaction.html#inert
         */
        [_inertSiblings](elements, toSkip, toKeepInert) {
            for (const element of elements) {
                // Assume element is not a Document, so it must have a parentNode.
                const parent = element.parentNode;
                const children = parent.children;
                const inertedSiblings = new Set();
                for (let j = 0; j < children.length; j++) {
                    const sibling = children[j];
                    // Skip the input element, if not inertable or to be skipped.
                    if (sibling === element || !this[_isInertable](sibling) ||
                        (toSkip && toSkip.has(sibling))) {
                        continue;
                    }
                    // Should be collected since already inerted.
                    if (toKeepInert && sibling.inert) {
                        toKeepInert.add(sibling);
                    }
                    else {
                        sibling.inert = true;
                        inertedSiblings.add(sibling);
                    }
                }
                // Store the siblings that were inerted.
                element[_siblingsToRestore] = inertedSiblings;
                // Observe only immediate children mutations on the parent.
                const mo = new MutationObserver(this[_handleMutations].bind(this));
                element[_parentMO] = mo;
                let parentToObserve = parent;
                // If we're using the ShadyDOM polyfill, then our parent could be a
                // shady root, which is an object that acts like a ShadowRoot, but isn't
                // actually a node in the real DOM. Observe the real DOM parent instead.
                const maybeShadyRoot = parentToObserve;
                if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
                    parentToObserve = maybeShadyRoot.host;
                }
                mo.observe(parentToObserve, {
                    childList: true,
                });
            }
        }
        /**
         * Handles newly added/removed nodes by toggling their inertness.
         * It also checks if the current top Blocking Element has been removed,
         * notifying and removing it.
         */
        [_handleMutations](mutations) {
            const parents = this[_topElParents];
            const toKeepInert = this[_alreadyInertElements];
            for (const mutation of mutations) {
                // If the target is a shadowRoot, get its host as we skip shadowRoots when
                // computing _topElParents.
                const target = mutation.target.host || mutation.target;
                const idx = target === document.body ?
                    parents.length :
                    parents.indexOf(target);
                const inertedChild = parents[idx - 1];
                const inertedSiblings = inertedChild[_siblingsToRestore];
                // To restore.
                for (let i = 0; i < mutation.removedNodes.length; i++) {
                    const sibling = mutation.removedNodes[i];
                    if (sibling === inertedChild) {
                        console.info('Detected removal of the top Blocking Element.');
                        this.pop();
                        return;
                    }
                    if (inertedSiblings.has(sibling)) {
                        sibling.inert = false;
                        inertedSiblings.delete(sibling);
                    }
                }
                // To inert.
                for (let i = 0; i < mutation.addedNodes.length; i++) {
                    const sibling = mutation.addedNodes[i];
                    if (!this[_isInertable](sibling)) {
                        continue;
                    }
                    if (toKeepInert && sibling.inert) {
                        toKeepInert.add(sibling);
                    }
                    else {
                        sibling.inert = true;
                        inertedSiblings.add(sibling);
                    }
                }
            }
        }
        /**
         * Returns if the element is inertable.
         */
        [_isInertable](element) {
            return false === /^(style|template|script)$/.test(element.localName);
        }
        /**
         * Returns the list of newParents of an element, starting from element
         * (included) up to `document.body` (excluded).
         */
        [_getParents](element) {
            const parents = [];
            let current = element;
            // Stop to body.
            while (current && current !== document.body) {
                // Skip shadow roots.
                if (current.nodeType === Node.ELEMENT_NODE) {
                    parents.push(current);
                }
                // ShadowDom v1
                if (current.assignedSlot) {
                    // Collect slots from deepest slot to top.
                    while (current = current.assignedSlot) {
                        parents.push(current);
                    }
                    // Continue the search on the top slot.
                    current = parents.pop();
                    continue;
                }
                current = current.parentNode ||
                    current.host;
            }
            return parents;
        }
        /**
         * Returns the distributed children of the element's shadow root.
         * Returns null if the element doesn't have a shadow root.
         */
        [_getDistributedChildren](element) {
            const shadowRoot = element.shadowRoot;
            if (!shadowRoot) {
                return null;
            }
            const result = new Set();
            let i;
            let j;
            let nodes;
            const slots = shadowRoot.querySelectorAll('slot');
            if (slots.length && slots[0].assignedNodes) {
                for (i = 0; i < slots.length; i++) {
                    nodes = slots[i].assignedNodes({
                        flatten: true,
                    });
                    for (j = 0; j < nodes.length; j++) {
                        if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                            result.add(nodes[j]);
                        }
                    }
                }
                // No need to search for <content>.
            }
            return result;
        }
    }
    document.$blockingElements =
        new BlockingElementsImpl();
})();

/**
 * This work is licensed under the W3C Software and Document License
 * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
 */

(function() {
  // Return early if we're not running inside of the browser.
  if (typeof window === 'undefined') {
    return;
  }

  // Convenience function for converting NodeLists.
  /** @type {typeof Array.prototype.slice} */
  const slice = Array.prototype.slice;

  /**
   * IE has a non-standard name for "matches".
   * @type {typeof Element.prototype.matches}
   */
  const matches =
      Element.prototype.matches || Element.prototype.msMatchesSelector;

  /** @type {string} */
  const _focusableElementsString = ['a[href]',
                                    'area[href]',
                                    'input:not([disabled])',
                                    'select:not([disabled])',
                                    'textarea:not([disabled])',
                                    'button:not([disabled])',
                                    'details',
                                    'summary',
                                    'iframe',
                                    'object',
                                    'embed',
                                    '[contenteditable]'].join(',');

  /**
   * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
   * attribute.
   *
   * Its main functions are:
   *
   * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
   *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
   *   each focusable node in the subtree with the singleton `InertManager` which manages all known
   *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
   *   instance exists for each focusable node which has at least one inert root as an ancestor.
   *
   * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
   *   attribute is removed from the root node). This is handled in the destructor, which calls the
   *   `deregister` method on `InertManager` for each managed inert node.
   */
  class InertRoot {
    /**
     * @param {!Element} rootElement The Element at the root of the inert subtree.
     * @param {!InertManager} inertManager The global singleton InertManager object.
     */
    constructor(rootElement, inertManager) {
      /** @type {!InertManager} */
      this._inertManager = inertManager;

      /** @type {!Element} */
      this._rootElement = rootElement;

      /**
       * @type {!Set<!InertNode>}
       * All managed focusable nodes in this InertRoot's subtree.
       */
      this._managedNodes = new Set();

      // Make the subtree hidden from assistive technology
      if (this._rootElement.hasAttribute('aria-hidden')) {
        /** @type {?string} */
        this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
      } else {
        this._savedAriaHidden = null;
      }
      this._rootElement.setAttribute('aria-hidden', 'true');

      // Make all focusable elements in the subtree unfocusable and add them to _managedNodes
      this._makeSubtreeUnfocusable(this._rootElement);

      // Watch for:
      // - any additions in the subtree: make them unfocusable too
      // - any removals from the subtree: remove them from this inert root's managed nodes
      // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
      //   element, make that node a managed node.
      this._observer = new MutationObserver(this._onMutation.bind(this));
      this._observer.observe(this._rootElement, {attributes: true, childList: true, subtree: true});
    }

    /**
     * Call this whenever this object is about to become obsolete.  This unwinds all of the state
     * stored in this object and updates the state of all of the managed nodes.
     */
    destructor() {
      this._observer.disconnect();

      if (this._rootElement) {
        if (this._savedAriaHidden !== null) {
          this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
        } else {
          this._rootElement.removeAttribute('aria-hidden');
        }
      }

      this._managedNodes.forEach(function(inertNode) {
        this._unmanageNode(inertNode.node);
      }, this);

      // Note we cast the nulls to the ANY type here because:
      // 1) We want the class properties to be declared as non-null, or else we
      //    need even more casts throughout this code. All bets are off if an
      //    instance has been destroyed and a method is called.
      // 2) We don't want to cast "this", because we want type-aware optimizations
      //    to know which properties we're setting.
      this._observer = /** @type {?} */ (null);
      this._rootElement = /** @type {?} */ (null);
      this._managedNodes = /** @type {?} */ (null);
      this._inertManager = /** @type {?} */ (null);
    }

    /**
     * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
     */
    get managedNodes() {
      return new Set(this._managedNodes);
    }

    /** @return {boolean} */
    get hasSavedAriaHidden() {
      return this._savedAriaHidden !== null;
    }

    /** @param {?string} ariaHidden */
    set savedAriaHidden(ariaHidden) {
      this._savedAriaHidden = ariaHidden;
    }

    /** @return {?string} */
    get savedAriaHidden() {
      return this._savedAriaHidden;
    }

    /**
     * @param {!Node} startNode
     */
    _makeSubtreeUnfocusable(startNode) {
      composedTreeWalk(startNode, (node) => this._visitNode(node));

      let activeElement = document.activeElement;

      if (!document.body.contains(startNode)) {
        // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
        let node = startNode;
        /** @type {!ShadowRoot|undefined} */
        let root = undefined;
        while (node) {
          if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            root = /** @type {!ShadowRoot} */ (node);
            break;
          }
          node = node.parentNode;
        }
        if (root) {
          activeElement = root.activeElement;
        }
      }
      if (startNode.contains(activeElement)) {
        activeElement.blur();
        // In IE11, if an element is already focused, and then set to tabindex=-1
        // calling blur() will not actually move the focus.
        // To work around this we call focus() on the body instead.
        if (activeElement === document.activeElement) {
          document.body.focus();
        }
      }
    }

    /**
     * @param {!Node} node
     */
    _visitNode(node) {
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }
      const element = /** @type {!Element} */ (node);

      // If a descendant inert root becomes un-inert, its descendants will still be inert because of
      // this inert root, so all of its managed nodes need to be adopted by this InertRoot.
      if (element !== this._rootElement && element.hasAttribute('inert')) {
        this._adoptInertRoot(element);
      }

      if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
        this._manageNode(element);
      }
    }

    /**
     * Register the given node with this InertRoot and with InertManager.
     * @param {!Node} node
     */
    _manageNode(node) {
      const inertNode = this._inertManager.register(node, this);
      this._managedNodes.add(inertNode);
    }

    /**
     * Unregister the given node with this InertRoot and with InertManager.
     * @param {!Node} node
     */
    _unmanageNode(node) {
      const inertNode = this._inertManager.deregister(node, this);
      if (inertNode) {
        this._managedNodes.delete(inertNode);
      }
    }

    /**
     * Unregister the entire subtree starting at `startNode`.
     * @param {!Node} startNode
     */
    _unmanageSubtree(startNode) {
      composedTreeWalk(startNode, (node) => this._unmanageNode(node));
    }

    /**
     * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
     * @param {!Element} node
     */
    _adoptInertRoot(node) {
      let inertSubroot = this._inertManager.getInertRoot(node);

      // During initialisation this inert root may not have been registered yet,
      // so register it now if need be.
      if (!inertSubroot) {
        this._inertManager.setInert(node, true);
        inertSubroot = this._inertManager.getInertRoot(node);
      }

      inertSubroot.managedNodes.forEach(function(savedInertNode) {
        this._manageNode(savedInertNode.node);
      }, this);
    }

    /**
     * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
     * @param {!Array<!MutationRecord>} records
     * @param {!MutationObserver} self
     */
    _onMutation(records, self) {
      records.forEach(function(record) {
        const target = /** @type {!Element} */ (record.target);
        if (record.type === 'childList') {
          // Manage added nodes
          slice.call(record.addedNodes).forEach(function(node) {
            this._makeSubtreeUnfocusable(node);
          }, this);

          // Un-manage removed nodes
          slice.call(record.removedNodes).forEach(function(node) {
            this._unmanageSubtree(node);
          }, this);
        } else if (record.type === 'attributes') {
          if (record.attributeName === 'tabindex') {
            // Re-initialise inert node if tabindex changes
            this._manageNode(target);
          } else if (target !== this._rootElement &&
                    record.attributeName === 'inert' &&
                    target.hasAttribute('inert')) {
            // If a new inert root is added, adopt its managed nodes and make sure it knows about the
            // already managed nodes from this inert subroot.
            this._adoptInertRoot(target);
            const inertSubroot = this._inertManager.getInertRoot(target);
            this._managedNodes.forEach(function(managedNode) {
              if (target.contains(managedNode.node)) {
                inertSubroot._manageNode(managedNode.node);
              }
            });
          }
        }
      }, this);
    }
  }

  /**
   * `InertNode` initialises and manages a single inert node.
   * A node is inert if it is a descendant of one or more inert root elements.
   *
   * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
   * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
   * is intrinsically focusable or not.
   *
   * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
   * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
   * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
   * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
   * or removes the `tabindex` attribute if the element is intrinsically focusable.
   */
  class InertNode {
    /**
     * @param {!Node} node A focusable element to be made inert.
     * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
     */
    constructor(node, inertRoot) {
      /** @type {!Node} */
      this._node = node;

      /** @type {boolean} */
      this._overrodeFocusMethod = false;

      /**
       * @type {!Set<!InertRoot>} The set of descendant inert roots.
       *    If and only if this set becomes empty, this node is no longer inert.
       */
      this._inertRoots = new Set([inertRoot]);

      /** @type {?number} */
      this._savedTabIndex = null;

      /** @type {boolean} */
      this._destroyed = false;

      // Save any prior tabindex info and make this node untabbable
      this.ensureUntabbable();
    }

    /**
     * Call this whenever this object is about to become obsolete.
     * This makes the managed node focusable again and deletes all of the previously stored state.
     */
    destructor() {
      this._throwIfDestroyed();

      if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
        const element = /** @type {!Element} */ (this._node);
        if (this._savedTabIndex !== null) {
          element.setAttribute('tabindex', this._savedTabIndex);
        } else {
          element.removeAttribute('tabindex');
        }

        // Use `delete` to restore native focus method.
        if (this._overrodeFocusMethod) {
          delete element.focus;
        }
      }

      // See note in InertRoot.destructor for why we cast these nulls to ANY.
      this._node = /** @type {?} */ (null);
      this._inertRoots = /** @type {?} */ (null);
      this._destroyed = true;
    }

    /**
     * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
     * If the object has been destroyed, any attempt to access it will cause an exception.
     */
    get destroyed() {
      return /** @type {!InertNode} */ (this)._destroyed;
    }

    /**
     * Throw if user tries to access destroyed InertNode.
     */
    _throwIfDestroyed() {
      if (this.destroyed) {
        throw new Error('Trying to access destroyed InertNode');
      }
    }

    /** @return {boolean} */
    get hasSavedTabIndex() {
      return this._savedTabIndex !== null;
    }

    /** @return {!Node} */
    get node() {
      this._throwIfDestroyed();
      return this._node;
    }

    /** @param {?number} tabIndex */
    set savedTabIndex(tabIndex) {
      this._throwIfDestroyed();
      this._savedTabIndex = tabIndex;
    }

    /** @return {?number} */
    get savedTabIndex() {
      this._throwIfDestroyed();
      return this._savedTabIndex;
    }

    /** Save the existing tabindex value and make the node untabbable and unfocusable */
    ensureUntabbable() {
      if (this.node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }
      const element = /** @type {!Element} */ (this.node);
      if (matches.call(element, _focusableElementsString)) {
        if (/** @type {!HTMLElement} */ (element).tabIndex === -1 &&
            this.hasSavedTabIndex) {
          return;
        }

        if (element.hasAttribute('tabindex')) {
          this._savedTabIndex = /** @type {!HTMLElement} */ (element).tabIndex;
        }
        element.setAttribute('tabindex', '-1');
        if (element.nodeType === Node.ELEMENT_NODE) {
          element.focus = function() {};
          this._overrodeFocusMethod = true;
        }
      } else if (element.hasAttribute('tabindex')) {
        this._savedTabIndex = /** @type {!HTMLElement} */ (element).tabIndex;
        element.removeAttribute('tabindex');
      }
    }

    /**
     * Add another inert root to this inert node's set of managing inert roots.
     * @param {!InertRoot} inertRoot
     */
    addInertRoot(inertRoot) {
      this._throwIfDestroyed();
      this._inertRoots.add(inertRoot);
    }

    /**
     * Remove the given inert root from this inert node's set of managing inert roots.
     * If the set of managing inert roots becomes empty, this node is no longer inert,
     * so the object should be destroyed.
     * @param {!InertRoot} inertRoot
     */
    removeInertRoot(inertRoot) {
      this._throwIfDestroyed();
      this._inertRoots.delete(inertRoot);
      if (this._inertRoots.size === 0) {
        this.destructor();
      }
    }
  }

  /**
   * InertManager is a per-document singleton object which manages all inert roots and nodes.
   *
   * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
   * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
   * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
   * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
   * is created for each such node, via the `_managedNodes` map.
   */
  class InertManager {
    /**
     * @param {!Document} document
     */
    constructor(document) {
      if (!document) {
        throw new Error('Missing required argument; InertManager needs to wrap a document.');
      }

      /** @type {!Document} */
      this._document = document;

      /**
       * All managed nodes known to this InertManager. In a map to allow looking up by Node.
       * @type {!Map<!Node, !InertNode>}
       */
      this._managedNodes = new Map();

      /**
       * All inert roots known to this InertManager. In a map to allow looking up by Node.
       * @type {!Map<!Node, !InertRoot>}
       */
      this._inertRoots = new Map();

      /**
       * Observer for mutations on `document.body`.
       * @type {!MutationObserver}
       */
      this._observer = new MutationObserver(this._watchForInert.bind(this));

      // Add inert style.
      addInertStyle(document.head || document.body || document.documentElement);

      // Wait for document to be loaded.
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
      } else {
        this._onDocumentLoaded();
      }
    }

    /**
     * Set whether the given element should be an inert root or not.
     * @param {!Element} root
     * @param {boolean} inert
     */
    setInert(root, inert) {
      if (inert) {
        if (this._inertRoots.has(root)) { // element is already inert
          return;
        }

        const inertRoot = new InertRoot(root, this);
        root.setAttribute('inert', '');
        this._inertRoots.set(root, inertRoot);
        // If not contained in the document, it must be in a shadowRoot.
        // Ensure inert styles are added there.
        if (!this._document.body.contains(root)) {
          let parent = root.parentNode;
          while (parent) {
            if (parent.nodeType === 11) {
              addInertStyle(parent);
            }
            parent = parent.parentNode;
          }
        }
      } else {
        if (!this._inertRoots.has(root)) { // element is already non-inert
          return;
        }

        const inertRoot = this._inertRoots.get(root);
        inertRoot.destructor();
        this._inertRoots.delete(root);
        root.removeAttribute('inert');
      }
    }

    /**
     * Get the InertRoot object corresponding to the given inert root element, if any.
     * @param {!Node} element
     * @return {!InertRoot|undefined}
     */
    getInertRoot(element) {
      return this._inertRoots.get(element);
    }

    /**
     * Register the given InertRoot as managing the given node.
     * In the case where the node has a previously existing inert root, this inert root will
     * be added to its set of inert roots.
     * @param {!Node} node
     * @param {!InertRoot} inertRoot
     * @return {!InertNode} inertNode
     */
    register(node, inertRoot) {
      let inertNode = this._managedNodes.get(node);
      if (inertNode !== undefined) { // node was already in an inert subtree
        inertNode.addInertRoot(inertRoot);
      } else {
        inertNode = new InertNode(node, inertRoot);
      }

      this._managedNodes.set(node, inertNode);

      return inertNode;
    }

    /**
     * De-register the given InertRoot as managing the given inert node.
     * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
     * node from the InertManager's set of managed nodes if it is destroyed.
     * If the node is not currently managed, this is essentially a no-op.
     * @param {!Node} node
     * @param {!InertRoot} inertRoot
     * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
     */
    deregister(node, inertRoot) {
      const inertNode = this._managedNodes.get(node);
      if (!inertNode) {
        return null;
      }

      inertNode.removeInertRoot(inertRoot);
      if (inertNode.destroyed) {
        this._managedNodes.delete(node);
      }

      return inertNode;
    }

    /**
     * Callback used when document has finished loading.
     */
    _onDocumentLoaded() {
      // Find all inert roots in document and make them actually inert.
      const inertElements = slice.call(this._document.querySelectorAll('[inert]'));
      inertElements.forEach(function(inertElement) {
        this.setInert(inertElement, true);
      }, this);

      // Comment this out to use programmatic API only.
      this._observer.observe(this._document.body || this._document.documentElement, {attributes: true, subtree: true, childList: true});
    }

    /**
     * Callback used when mutation observer detects attribute changes.
     * @param {!Array<!MutationRecord>} records
     * @param {!MutationObserver} self
     */
    _watchForInert(records, self) {
      const _this = this;
      records.forEach(function(record) {
        switch (record.type) {
        case 'childList':
          slice.call(record.addedNodes).forEach(function(node) {
            if (node.nodeType !== Node.ELEMENT_NODE) {
              return;
            }
            const inertElements = slice.call(node.querySelectorAll('[inert]'));
            if (matches.call(node, '[inert]')) {
              inertElements.unshift(node);
            }
            inertElements.forEach(function(inertElement) {
              this.setInert(inertElement, true);
            }, _this);
          }, _this);
          break;
        case 'attributes':
          if (record.attributeName !== 'inert') {
            return;
          }
          const target = /** @type {!Element} */ (record.target);
          const inert = target.hasAttribute('inert');
          _this.setInert(target, inert);
          break;
        }
      }, this);
    }
  }

  /**
   * Recursively walk the composed tree from |node|.
   * @param {!Node} node
   * @param {(function (!Element))=} callback Callback to be called for each element traversed,
   *     before descending into child nodes.
   * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
   */
  function composedTreeWalk(node, callback, shadowRootAncestor) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      const element = /** @type {!Element} */ (node);
      if (callback) {
        callback(element);
      }

      // Descend into node:
      // If it has a ShadowRoot, ignore all child elements - these will be picked
      // up by the <content> or <shadow> elements. Descend straight into the
      // ShadowRoot.
      const shadowRoot = /** @type {!HTMLElement} */ (element).shadowRoot;
      if (shadowRoot) {
        composedTreeWalk(shadowRoot, callback);
        return;
      }

      // If it is a <content> element, descend into distributed elements - these
      // are elements from outside the shadow root which are rendered inside the
      // shadow DOM.
      if (element.localName == 'content') {
        const content = /** @type {!HTMLContentElement} */ (element);
        // Verifies if ShadowDom v0 is supported.
        const distributedNodes = content.getDistributedNodes ?
          content.getDistributedNodes() : [];
        for (let i = 0; i < distributedNodes.length; i++) {
          composedTreeWalk(distributedNodes[i], callback);
        }
        return;
      }

      // If it is a <slot> element, descend into assigned nodes - these
      // are elements from outside the shadow root which are rendered inside the
      // shadow DOM.
      if (element.localName == 'slot') {
        const slot = /** @type {!HTMLSlotElement} */ (element);
        // Verify if ShadowDom v1 is supported.
        const distributedNodes = slot.assignedNodes ?
          slot.assignedNodes({flatten: true}) : [];
        for (let i = 0; i < distributedNodes.length; i++) {
          composedTreeWalk(distributedNodes[i], callback);
        }
        return;
      }
    }

    // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
    // element, nor a <shadow> element recurse normally.
    let child = node.firstChild;
    while (child != null) {
      composedTreeWalk(child, callback);
      child = child.nextSibling;
    }
  }

  /**
   * Adds a style element to the node containing the inert specific styles
   * @param {!Node} node
   */
  function addInertStyle(node) {
    if (node.querySelector('style#inert-style, link#inert-style')) {
      return;
    }
    const style = document.createElement('style');
    style.setAttribute('id', 'inert-style');
    style.textContent = '\n'+
                        '[inert] {\n' +
                        '  pointer-events: none;\n' +
                        '  cursor: default;\n' +
                        '}\n' +
                        '\n' +
                        '[inert], [inert] * {\n' +
                        '  -webkit-user-select: none;\n' +
                        '  -moz-user-select: none;\n' +
                        '  -ms-user-select: none;\n' +
                        '  user-select: none;\n' +
                        '}\n';
    node.appendChild(style);
  }

  /** @type {!InertManager} */
  const inertManager = new InertManager(document);

  if (!Element.prototype.hasOwnProperty('inert')) {
    Object.defineProperty(Element.prototype, 'inert', {
      enumerable: true,
      /** @this {!Element} */
      get: function() {
        return this.hasAttribute('inert');
      },
      /** @this {!Element} */
      set: function(inert) {
        inertManager.setInert(this, inert);
      },
    });
  }
})();

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    ANIMATE: 'mdc-drawer--animate',
    CLOSING: 'mdc-drawer--closing',
    DISMISSIBLE: 'mdc-drawer--dismissible',
    MODAL: 'mdc-drawer--modal',
    OPEN: 'mdc-drawer--open',
    OPENING: 'mdc-drawer--opening',
    ROOT: 'mdc-drawer',
};
var strings = {
    APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
    CLOSE_EVENT: 'MDCDrawer:closed',
    OPEN_EVENT: 'MDCDrawer:opened',
    SCRIM_SELECTOR: '.mdc-drawer-scrim',
};

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCDismissibleDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCDismissibleDrawerFoundation, _super);
    function MDCDismissibleDrawerFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCDismissibleDrawerFoundation.defaultAdapter), adapter)) || this;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        return _this;
    }
    Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                elementHasClass: function () { return false; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                focusActiveNavigationItem: function () { return undefined; },
                trapFocus: function () { return undefined; },
                releaseFocus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCDismissibleDrawerFoundation.prototype.destroy = function () {
        if (this.animationFrame_) {
            cancelAnimationFrame(this.animationFrame_);
        }
        if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
        }
    };
    /**
     * Opens the drawer from the closed state.
     */
    MDCDismissibleDrawerFoundation.prototype.open = function () {
        var _this = this;
        if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(cssClasses.OPEN);
        this.adapter.addClass(cssClasses.ANIMATE);
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter.addClass(cssClasses.OPENING);
        });
        this.adapter.saveFocus();
    };
    /**
     * Closes the drawer from the open state.
     */
    MDCDismissibleDrawerFoundation.prototype.close = function () {
        if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
        }
        this.adapter.addClass(cssClasses.CLOSING);
    };
    /**
     * Returns true if the drawer is in the open position.
     * @return true if drawer is in open state.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
        return this.adapter.hasClass(cssClasses.OPEN);
    };
    /**
     * Returns true if the drawer is animating open.
     * @return true if drawer is animating open.
     */
    MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
        return this.adapter.hasClass(cssClasses.OPENING) ||
            this.adapter.hasClass(cssClasses.ANIMATE);
    };
    /**
     * Returns true if the drawer is animating closed.
     * @return true if drawer is animating closed.
     */
    MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
        return this.adapter.hasClass(cssClasses.CLOSING);
    };
    /**
     * Keydown handler to close drawer when key is escape.
     */
    MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    /**
     * Handles the `transitionend` event when the drawer finishes opening/closing.
     */
    MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
        var OPENING = cssClasses.OPENING, CLOSING = cssClasses.CLOSING, OPEN = cssClasses.OPEN, ANIMATE = cssClasses.ANIMATE, ROOT = cssClasses.ROOT;
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.
        var isRootElement = this.isElement_(evt.target) &&
            this.adapter.elementHasClass(evt.target, ROOT);
        if (!isRootElement) {
            return;
        }
        if (this.isClosing()) {
            this.adapter.removeClass(OPEN);
            this.closed_();
            this.adapter.restoreFocus();
            this.adapter.notifyClose();
        }
        else {
            this.adapter.focusActiveNavigationItem();
            this.opened_();
            this.adapter.notifyOpen();
        }
        this.adapter.removeClass(ANIMATE);
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    /**
     * Extension point for when drawer finishes open animation.
     */
    MDCDismissibleDrawerFoundation.prototype.opened_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Extension point for when drawer finishes close animation.
     */
    MDCDismissibleDrawerFoundation.prototype.closed_ = function () { }; // tslint:disable-line:no-empty
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
        // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
        return Boolean(element.classList);
    };
    return MDCDismissibleDrawerFoundation;
}(MDCFoundation));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/* istanbul ignore next: subclass is not a branch statement */
var MDCModalDrawerFoundation = /** @class */ (function (_super) {
    __extends(MDCModalDrawerFoundation, _super);
    function MDCModalDrawerFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles click event on scrim.
     */
    MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
        this.close();
    };
    /**
     * Called when drawer finishes open animation.
     */
    MDCModalDrawerFoundation.prototype.opened_ = function () {
        this.adapter.trapFocus();
    };
    /**
     * Called when drawer finishes close animation.
     */
    MDCModalDrawerFoundation.prototype.closed_ = function () {
        this.adapter.releaseFocus();
    };
    return MDCModalDrawerFoundation;
}(MDCDismissibleDrawerFoundation));

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const blockingElements = document.$blockingElements;
class DrawerBase extends BaseElement {
    constructor() {
        super(...arguments);
        this._previousFocus = null;
        this.open = false;
        this.hasHeader = false;
        this.type = '';
    }
    get mdcFoundationClass() {
        return this.type === 'modal' ? MDCModalDrawerFoundation :
            MDCDismissibleDrawerFoundation;
    }
    createAdapter() {
        return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), { elementHasClass: (element, className) => element.classList.contains(className), saveFocus: () => {
                // Note, casting to avoid cumbersome runtime check.
                this._previousFocus =
                    this.getRootNode().activeElement;
            }, restoreFocus: () => {
                const previousFocus = this._previousFocus && this._previousFocus.focus;
                if (previousFocus) {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    this._previousFocus.focus();
                }
            }, notifyClose: () => {
                this.open = false;
                this.dispatchEvent(new Event(strings.CLOSE_EVENT, { bubbles: true, cancelable: true }));
            }, notifyOpen: () => {
                this.open = true;
                this.dispatchEvent(new Event(strings.OPEN_EVENT, { bubbles: true, cancelable: true }));
            }, focusActiveNavigationItem: () => { }, trapFocus: () => {
                blockingElements.push(this);
                this.appContent.inert = true;
            }, releaseFocus: () => {
                blockingElements.remove(this);
                this.appContent.inert = false;
            } });
    }
    _handleScrimClick() {
        if (this.mdcFoundation instanceof MDCModalDrawerFoundation) {
            this.mdcFoundation.handleScrimClick();
        }
    }
    render() {
        const dismissible = this.type === 'dismissible' || this.type === 'modal';
        const modal = this.type === 'modal';
        const header = this.hasHeader ? html `
      <div class="mdc-drawer__header">
        <h3 class="mdc-drawer__title"><slot name="title"></slot></h3>
        <h6 class="mdc-drawer__subtitle"><slot name="subtitle"></slot></h6>
        <slot name="header"></slot>
      </div>
      ` :
            '';
        const classes = {
            'mdc-drawer--dismissible': dismissible,
            'mdc-drawer--modal': modal,
        };
        return html `
      <aside class="mdc-drawer ${classMap(classes)}">
        ${header}
        <div class="mdc-drawer__content"><slot></slot></div>
      </aside>
      ${modal ? html `<div class="mdc-drawer-scrim"
                          @click="${this._handleScrimClick}"></div>` :
            ''}
      <div class="mdc-drawer-app-content">
        <slot name="appContent"></slot>
      </div>
      `;
    }
    // note, we avoid calling `super.firstUpdated()` to control when
    // `createFoundation()` is called.
    firstUpdated() {
        this.mdcRoot.addEventListener('keydown', (e) => this.mdcFoundation.handleKeydown(e));
        this.mdcRoot.addEventListener('transitionend', (e) => this.mdcFoundation.handleTransitionEnd(e));
    }
    updated(changedProperties) {
        if (changedProperties.has('type')) {
            this.createFoundation();
        }
    }
}
__decorate([
    query('.mdc-drawer')
], DrawerBase.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-drawer-app-content')
], DrawerBase.prototype, "appContent", void 0);
__decorate([
    observer(function (value) {
        if (this.type === '') {
            return;
        }
        if (value) {
            this.mdcFoundation.open();
        }
        else {
            this.mdcFoundation.close();
        }
    }),
    property({ type: Boolean, reflect: true })
], DrawerBase.prototype, "open", void 0);
__decorate([
    property({ type: Boolean })
], DrawerBase.prototype, "hasHeader", void 0);
__decorate([
    property({ reflect: true })
], DrawerBase.prototype, "type", void 0);

/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const style = css `.mdc-drawer{border-color:rgba(0,0,0,.12);background-color:#fff;border-top-left-radius:0;border-top-right-radius:0;border-top-right-radius:var(--mdc-shape-large, 0);border-bottom-right-radius:0;border-bottom-right-radius:var(--mdc-shape-large, 0);border-bottom-left-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer .mdc-drawer__title{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98,0,238,.87)}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-top-left-radius:0;border-top-left-radius:var(--mdc-shape-large, 0);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0;border-bottom-left-radius:var(--mdc-shape-large, 0)}.mdc-drawer .mdc-list-item{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px}[dir=rtl] .mdc-drawer,.mdc-drawer[dir=rtl]{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-subtitle2-font-size, 0.875rem);line-height:1.375rem;line-height:var(--mdc-typography-subtitle2-line-height, 1.375rem);font-weight:500;font-weight:var(--mdc-typography-subtitle2-font-weight, 500);letter-spacing:0.0071428571em;letter-spacing:var(--mdc-typography-subtitle2-letter-spacing, 0.0071428571em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle2-text-transform, inherit);height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px}.mdc-drawer .mdc-list-item__text,.mdc-drawer .mdc-list-item__graphic{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}[dir=rtl] .mdc-drawer--animate,.mdc-drawer--animate[dir=rtl]{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}[dir=rtl] .mdc-drawer--opening,.mdc-drawer--opening[dir=rtl]{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:200ms}[dir=rtl] .mdc-drawer--closing,.mdc-drawer--closing[dir=rtl]{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:"";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-drawer__subtitle{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}[dir=rtl] .mdc-drawer--dismissible,.mdc-drawer--dismissible[dir=rtl]{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}[dir=rtl] .mdc-drawer-app-content,.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0,0,0,.32)}[dir=rtl] .mdc-drawer--modal,.mdc-drawer--modal[dir=rtl]{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:200ms;opacity:0}.mdc-drawer-app-content{overflow:auto;flex:1}:host{display:flex;height:100%}.mdc-drawer{width:256px;width:var(--mdc-drawer-width, 256px)}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-left:var(--mdc-drawer-width, 256px);margin-right:0}[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content,.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl]{margin-left:0;margin-right:256px;margin-right:var(--mdc-drawer-width, 256px)}`;

let Drawer = class Drawer extends DrawerBase {
};
Drawer.styles = style;
Drawer = __decorate([
    customElement('mwc-drawer')
], Drawer);

export { Drawer };
