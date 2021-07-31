/**
* @author alex
* @requires ball.js
*/

/**
* DHTML-specific implementation
* 
* @param {Object} id
* @param {Object} x
* @param {Object} y
* @param {Object} vx
* @param {Object} vy
*/
function DHTMLBall(id, x, y, vx, vy) {
    DHTMLBall.baseConstructor.call(this, x, y, vx, vy);
    this._id = id;
    this._elem = document.getElementById(id);
    this._elem.style.position = "absolute";
    this._elem.style.display = "block";
    this.move();
}
extend(DHTMLBall, Ball);

DHTMLBall.prototype.move = function () {
    DHTMLBall.base.move.call(this);
    this._elem.style.left = this._x + "px";
    this._elem.style.top = this._y + "px";
}

DHTMLBall.prototype.clone = function (newId) {
    var newNode = this._elem.cloneNode(true);
    newNode.id = newId;
    newNode.style.zIndex = this._elem.style.zIndex + 1;
    this._elem.parentNode.appendChild(newNode);
    return new DHTMLBall(newId);
}