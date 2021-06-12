import { Figure } from './../Figure';
import { Mat } from './../Mat';

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

    static randomDot(maxX, maxY) {
        return {
            x: Mat.getRandomInteger(maxX),
            y: Mat.getRandomInteger(maxY)
        }
    }

    static getRandomDotInEllipse(ellipse) {
        const angle = Math.floor(Math.random() * Math.PI * 2);
        return {
            x: ellipse.x + Math.floor(Math.cos(angle) * ellipse.radiusX * Math.random()),
            y: ellipse.y + Math.floor(Math.sin(angle) * ellipse.radiusY * Math.random())
        };
    }
}

export { Dot };