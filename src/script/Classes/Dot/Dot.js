import { Figure } from './../Figure';

class Dot extends Figure {
    constructor(obj, color) {
        super(color);
        this.x = obj.x;
        this.y = obj.y;
    }

    drawDot(ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, 1, 0, (Math.PI / 180) * 360);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

export { Dot };