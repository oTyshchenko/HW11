import { Figure } from './../Figure';

class Rect extends Figure {
    constructor(obj) {
        super(obj.color);
        this.beginX = obj.beginX;
        this.beginY = obj.beginY;
        this.width = obj.width;
        this.height = obj.height;
    }

    drawRect(ctx) {
        ctx.strokeStyle = this.color;
        ctx.strokeRect(this.beginX, this.beginY, this.width, this.height);
    }
}

export { Rect };