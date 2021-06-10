import { Figure } from '../Figure';

class Ellipse extends Figure {
    constructor(obj) {
        super(obj.color);
        this.x = obj.x;
        this.y = obj.y;
        this.radiusX = obj.radiusX;
        this.radiusY = obj.radiusY;
    }

    drawEllipse(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

export { Ellipse };