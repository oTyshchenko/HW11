export class Rect {
    constructor(dot1, dot2) {
        this.beginX = Math.min(dot1.x, dot2.x);
        this.beginY = Math.min(dot1.y, dot2.y);
        this.width = Math.max(dot1.x, dot2.x) - this.beginX;
        this.height = Math.max(dot1.y, dot2.y) - this.beginY;
    }

    crossRect(rect) {
        const a = this.beginX + this.width;
        const b = rect.beginX + rect.width;
        const c = this.beginY + this.height;
        const d = rect.beginY + rect.height;
        const maxY = Math.max(this.beginY, rect.beginY);
        const maxX = Math.max(this.beginX, rect.beginX);
        const minX = Math.min(a, b);
        const minY = Math.min(c, d);
        if (minX > maxX && minY > maxY) {
            return {
                x: maxX,
                y: maxY,
                width: minX - maxX,
                height: minY - maxY
            };
        };
    }
}