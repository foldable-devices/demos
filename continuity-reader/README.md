# Continuity Reader

A no-build demonstration of foldable-aware CSS and explicit layout switching that keeps an annotation editor mounted throughout transitions.

## Try it

1. Open `index.html` in a browser and type into **Your notes**.
2. Click **Use side-by-side layout** and **Use single-column layout** repeatedly. The textarea is not replaced.
3. Resize across the 740px breakpoint and check that the draft remains.
4. On a browser supporting Viewport Segments, inspect the layout near the hinge.
5. Test keyboard navigation, screen-reader reading order, and zoom.

This intentionally uses a small, CSS-first design: viewport-segment rules apply only while automatic layout is selected. An explicit user-selected mode takes precedence. It is a demonstration of avoiding state destruction, **not** a general-purpose state restoration library.

The draft is only retained while this page remains loaded. The demo does not simulate hardware, persist input after reload, or handle framework component remounts. Switching to two columns on narrow displays may reduce usable width: the control is a demonstration override, not a recommended universal default.
