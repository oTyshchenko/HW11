import { Figure } from '../Figure';

class EllipseInRect extends Figure {
    constructor(rect, color) {
        super(color);
        this.x = rect.x + rect.width / 2;
        this.y = rect.y + rect.height / 2;
        this.radiusX = rect.width / 2;
        this.radiusY = rect.height / 2;
    }
}

export { EllipseInRect };