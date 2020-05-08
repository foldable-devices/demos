function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import { html, css } from '../web_modules/lit-element.js';
import { GameGrid } from './game-grid.js';
import * as Ship from './ship.js';
export const GridDirection = {
  Top: 'Top',
  Bottom: 'Bottom',
  Left: 'Left',
  Right: 'Right'
};
export class PlayerGrid extends GameGrid {
  firstUpdated() {
    super.firstUpdated();
    this.generateRandomGrid(); // Ordered by size so it makes it easier to find the biggest boat left.

    this._boatsToSink = [Ship.ShipType.Carrier, Ship.ShipType.Battleship, Ship.ShipType.Submarine, Ship.ShipType.Destroyer, Ship.ShipType.Rescue];
  }

  constructor() {
    super();

    _defineProperty(this, "_pendingSanks", []);

    _defineProperty(this, "_boatsToSink", []);

    this._previousShot = {
      x: 0,
      y: 0
    };
  }

  restart() {
    super.restart();
    this._previousShot = {
      x: 0,
      y: 0
    };
    this._pendingSanks = [];
    this._boatsToSink = [Ship.ShipType.Carrier, Ship.ShipType.Battleship, Ship.ShipType.Submarine, Ship.ShipType.Destroyer, Ship.ShipType.Rescue];
  }

  isCellAPreviouslyMissedShot(cell) {
    return cell.shot && cell.type === undefined;
  }

  isCellABoatPreviouslyShot(cell) {
    // cell.shot is important because the computer can't cheat :p.
    return cell.shot && cell.type != undefined && cell.type === this.grid[this._previousShot.x][this._previousShot.y].type;
  }

  oppositeDirection(direction) {
    switch (direction) {
      case GridDirection.Left:
        return GridDirection.Right;

      case GridDirection.Right:
        return GridDirection.Left;

      case GridDirection.Top:
        return GridDirection.Bottom;

      case GridDirection.Bottom:
        return GridDirection.Top;

      default:
        console.error("wrong direction");
        return GridDirection.Top;
    }
  }

  biggestBoatLeft() {
    return Ship.getShipSize(this._boatsToSink[0]);
  }

  boatsLeftFitAround(x, y) {
    let biggestBoatLeft = this.biggestBoatLeft();
    const cell = {
      x: x,
      y: y
    };
    const emptySpotsLeft = this.walkGridAndCountEmptySpaces(GridDirection.Left, cell, biggestBoatLeft - 1, 0);
    const emptySpotsRight = this.walkGridAndCountEmptySpaces(GridDirection.Right, cell, biggestBoatLeft - 1, 0);
    const emptySpotsTop = this.walkGridAndCountEmptySpaces(GridDirection.Top, cell, biggestBoatLeft - 1, 0);
    const emptySpotsBottom = this.walkGridAndCountEmptySpaces(GridDirection.Bottom, cell, biggestBoatLeft - 1, 0);

    if (emptySpotsLeft + 1 === biggestBoatLeft || emptySpotsRight + 1 === biggestBoatLeft || emptySpotsTop + 1 === biggestBoatLeft || emptySpotsBottom + 1 === biggestBoatLeft || emptySpotsLeft + emptySpotsRight + 1 >= biggestBoatLeft || emptySpotsTop + emptySpotsBottom + 1 >= biggestBoatLeft) {
      return true;
    } else {
      return false;
    }
  }

  walkGridAndCountEmptySpaces(direction, cell, maxWalk, currentSpaceNumber) {
    if (this.isCellAtTheEge(direction, cell)) return currentSpaceNumber;
    let nextCell = cell;

    switch (direction) {
      case GridDirection.Left:
        nextCell = {
          x: cell.x,
          y: Math.max(cell.y - 1, 1)
        };
        break;

      case GridDirection.Right:
        nextCell = {
          x: cell.x,
          y: Math.min(cell.y + 1, 10)
        };
        break;

      case GridDirection.Top:
        nextCell = {
          x: Math.max(cell.x - 1, 1),
          y: cell.y
        };
        break;

      case GridDirection.Bottom:
        nextCell = {
          x: Math.min(cell.x + 1, 10),
          y: cell.y
        };
        break;

      default:
        console.error("wrong direction");
        return;
    }

    if (this.isCellAPreviouslyMissedShot(this.grid[nextCell.x][nextCell.y])) {
      return currentSpaceNumber;
    }

    if (this.isCellABoatPreviouslyShot(this.grid[nextCell.x][nextCell.y])) {
      return currentSpaceNumber;
    }

    currentSpaceNumber++;

    if (currentSpaceNumber === maxWalk) {
      return currentSpaceNumber;
    } else return this.walkGridAndCountEmptySpaces(direction, nextCell, maxWalk, currentSpaceNumber);
  }

  isCellAtTheEge(direction, cell) {
    return direction === GridDirection.Left && cell.y - 1 === 0 || direction === GridDirection.Right && cell.y + 1 === 11 || direction === GridDirection.Top && cell.x - 1 === 0 || direction === GridDirection.Bottom && cell.x + 1 === 11;
  }

  walkGrid(direction, cell) {
    // It's not possible to walk the grid (edges) then walk the other direction.
    if (this.isCellAtTheEge(direction, cell)) return this.walkGrid(this.oppositeDirection(direction), cell);
    let candidateCell = cell;

    switch (direction) {
      case GridDirection.Left:
        candidateCell = {
          x: cell.x,
          y: Math.max(cell.y - 1, 1)
        };
        break;

      case GridDirection.Right:
        candidateCell = {
          x: cell.x,
          y: Math.min(cell.y + 1, 10)
        };
        break;

      case GridDirection.Top:
        candidateCell = {
          x: Math.max(cell.x - 1, 1),
          y: cell.y
        };
        break;

      case GridDirection.Bottom:
        candidateCell = {
          x: Math.min(cell.x + 1, 10),
          y: cell.y
        };
        break;

      default:
        console.error("wrong direction");
        return;
    } // We shot and found a boat there, let's continue to climb.


    if (this.isCellABoatPreviouslyShot(this.grid[candidateCell.x][candidateCell.y])) return this.walkGrid(direction, candidateCell); // We're trying to climb but we found a water that we shot previously so
    // we should climb the other direction.

    if (this.isCellAPreviouslyMissedShot(this.grid[candidateCell.x][candidateCell.y])) return this.walkGrid(this.oppositeDirection(direction), candidateCell);
    return candidateCell;
  }

  enemyShoot() {
    if (this.isGameOver()) return;
    let x;
    let y; //Successful shot, we'll try around.

    if (this._previousShot.x != 0 && this._previousShot.y != 0) {
      let leftCell;
      let rightCell;
      let topCell;
      let bottomCell;
      const hasLeft = this._previousShot.y - 1 > 0;
      let leftCandidate = hasLeft && this.grid[this._previousShot.x][this._previousShot.y - 1].shot === false;
      if (hasLeft) leftCell = {
        x: this._previousShot.x,
        y: this._previousShot.y - 1
      };
      const hasRight = this._previousShot.y + 1 < 11;
      let rightCandidate = hasRight && this.grid[this._previousShot.x][this._previousShot.y + 1].shot === false;
      if (hasRight) rightCell = {
        x: this._previousShot.x,
        y: this._previousShot.y + 1
      };
      const hasTop = this._previousShot.x - 1 > 0;
      let topCandidate = hasTop && this.grid[this._previousShot.x - 1][this._previousShot.y].shot === false;
      if (hasTop) topCell = {
        x: this._previousShot.x - 1,
        y: this._previousShot.y
      };
      const hasBottom = this._previousShot.x + 1 < 11;
      let bottomCandidate = hasBottom && this.grid[this._previousShot.x + 1][this._previousShot.y].shot === false;
      if (hasBottom) bottomCell = {
        x: this._previousShot.x + 1,
        y: this._previousShot.y
      };
      let tryVertical = Math.random() >= 0.5; // If the cells around were shot and had a boat we need to climb up the grid.

      if (hasLeft && this.isCellABoatPreviouslyShot(this.grid[leftCell.x][leftCell.y]) || hasRight && this.isCellABoatPreviouslyShot(this.grid[rightCell.x][rightCell.y])) {
        // we shot there previously so it's an horizontal boat
        if (hasLeft && this.grid[leftCell.x][leftCell.y].shot) {
          rightCell = this.walkGrid(GridDirection.Right, leftCell);
          if (rightCell) rightCandidate = true;
        } else if (hasRight && this.grid[rightCell.x][rightCell.y].shot) {
          leftCell = this.walkGrid(GridDirection.Left, rightCell);
          if (leftCell) leftCandidate = true;
        }

        tryVertical = false;
      }

      if (hasTop && this.isCellABoatPreviouslyShot(this.grid[topCell.x][topCell.y]) || hasBottom && this.isCellABoatPreviouslyShot(this.grid[bottomCell.x][bottomCell.y])) {
        if (hasTop && this.grid[topCell.x][topCell.y].shot) {
          bottomCell = this.walkGrid(GridDirection.Bottom, topCell);
          if (bottomCell) bottomCandidate = true;
        } else if (hasBottom && this.grid[bottomCell.x][bottomCell.y].shot) {
          topCell = this.walkGrid(GridDirection.Top, bottomCell);
          if (topCell) topCandidate = true;
        }

        tryVertical = true;
      } // tryVertical can be random in case we have no previous shots but we need
      // to make sure we can actually shoot there (e.g. edges)


      if (tryVertical && !bottomCandidate && !topCandidate) tryVertical = false;
      if (!tryVertical && !leftCandidate && !rightCandidate) tryVertical = true;

      if (tryVertical && (topCandidate || bottomCandidate)) {
        if (topCandidate && bottomCandidate) {
          const top = Math.random() >= 0.5;
          if (top) x = topCell.x;else x = bottomCell.x;
        } else if (topCandidate) x = topCell.x;else if (bottomCandidate) x = bottomCell.x;

        y = this._previousShot.y;
      } else {
        if (leftCandidate && rightCandidate) {
          const left = Math.random() >= 0.5;
          if (left) y = leftCell.y;else y = rightCell.y;
        } else if (rightCandidate) y = rightCell.y;else if (leftCandidate) y = leftCell.y;

        x = this._previousShot.x;
      }
    } else {
      x = this.getRandomCoordinate();
      y = this.getRandomCoordinate();

      while (this.grid[x][y].shot === true || this.grid[x][y].shot === false && !this.boatsLeftFitAround(x, y)) x = this.getRandomCoordinate();

      y = this.getRandomCoordinate();
    }

    if (this.isShip(this.grid[x][y])) {
      //Fire at the boat.
      const ship = this.shadowRoot.querySelector('#' + this.grid[x][y].type);
      ship.enemyShootAt(x, y);
      this.grid[x][y].shot = true; // By chance we found another boat around. Let's remember it so we can come back to it.

      if (this.grid[x][y].type != this._previousShot.type && this._previousShot.type != undefined) {
        //Object.create is used to make sure we get a copy of the shot, not a reference.
        this._pendingSanks.push(Object.create(this._previousShot));
      }

      this._previousShot = {
        x: x,
        y: y,
        type: ship.type
      };

      if (ship.destroyed) {
        if (this._pendingSanks.length > 0) {
          this._previousShot = this._pendingSanks.pop();
        } else this._previousShot = {
          x: 0,
          y: 0
        };
      }

      setTimeout(() => this.enemyShoot(), 2000);
      return;
    }

    this.grid[x][y].shot = true;
    this.updateGrid();
    this.playerPlayed(x, y);
  }

  shipDestroyed(event) {
    this._boatsToSink = this._boatsToSink.filter(item => item != event.detail.type);
    this.playerSankShip(event.detail.type);
  }

  shipHit(event) {
    this.playerHitShip(event.detail.type);
  }

  render() {
    return html`
      <div class="title">Your fleet</div>
      <div class="grid">
          ${this.grid.map((row, x) => row.map((cell, y) => {
      if (this.isShip(this.grid[x][y])) {
        if (!this.isShipPlaced(cell.type)) {
          this._shipPlaced.push(cell.type);

          return html`
                      <ship-element id="${cell.type}" x="${cell.x}" y="${cell.y}"
                        type="${cell.type}" orientation="${cell.orientation}" @ship-hit="${this.shipHit}"
                        @ship-destroyed="${this.shipDestroyed}">
                      </ship-element>`;
        }
      } else return html`<empty-cell ?hit="${cell.shot}">${cell.text}</empty-cell>`;
    }))}
      </div>
    `;
  }

}

_defineProperty(PlayerGrid, "styles", [_get(_getPrototypeOf(PlayerGrid), "styles", PlayerGrid), css`
    :host {
      pointer-events:none;
    }
  `]);

customElements.define("player-grid", PlayerGrid);