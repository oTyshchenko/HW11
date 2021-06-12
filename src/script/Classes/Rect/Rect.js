import { Figure } from './../Figure';
import { Dot } from './../Dot/Dot';


class Rect extends Figure {
    constructor(dot1, dot2, color) {
        super(color);
        this.beginX = Math.min(dot1.x, dot2.x);
        this.beginY = Math.min(dot1.y, dot2.y);
        this.width = Math.max(dot1.x, dot2.x) - Math.min(dot1.x, dot2.x);
        this.height = Math.max(dot1.y, dot2.y) - Math.min(dot1.y, dot2.y);
    }

    drawRect(ctx) {
        ctx.strokeStyle = this.color;
        ctx.strokeRect(this.beginX, this.beginY, this.width, this.height);
    }

    crossRect(rect) {
        const a = this.beginX + this.width;
        const b = rect.beginX + rect.width;
        const c = this.beginY + this.height;
        const d = rect.beginY + rect.height;
        if (Math.min(a, b) > Math.max(this.beginX, rect.beginX) &&
            Math.min(c, d) > Math.max(this.beginY, rect.beginY)) {
            return {
                x: Math.max(this.beginX, rect.beginX),
                y: Math.max(this.beginY, rect.beginY),
                width: Math.min(a, b) - Math.max(this.beginX, rect.beginX),
                height: Math.min(c, d) - Math.max(this.beginY, rect.beginY)
            };
        };
    }
}

export { Rect };