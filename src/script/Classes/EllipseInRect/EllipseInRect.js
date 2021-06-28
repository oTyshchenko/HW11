export class EllipseInRect {
    constructor(rect) {
        this.x = rect.x + rect.width / 2;
        this.y = rect.y + rect.height / 2;
        this.radiusX = rect.width / 2;
        this.radiusY = rect.height / 2;
    }

    getRandomDotInEllipse() {
        const angle = Math.floor(Math.random() * Math.PI * 2);
        return {
            x: this.x + Math.floor(Math.cos(angle) * this.radiusX  * Math.random()),
            y: this.y + Math.floor(Math.sin(angle) * this.radiusY * Math.random())
        };
    }
}