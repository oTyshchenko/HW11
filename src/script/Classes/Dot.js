export class Dot {
    constructor(obj) {
        this.x = obj.x;
        this.y = obj.y;
    }

    static randomDot(maxX, maxY) {
        return {
            x: (Math.floor(Math.random() * (maxX + 1))),
            y: (Math.floor(Math.random() * (maxY + 1)))
        }
    }
}