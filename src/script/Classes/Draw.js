export class Draw {
    constructor(context) {
        this.context = context;
    }

    clearRect(width, height) {
        this.context.clearRect(0, 0, width, height)
    }

    drawDot(obj,color) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.arc(obj.x, obj.y, 1, 0, (Math.PI / 180) * 360);
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }

    drawRect(obj, color) {
        this.context.strokeStyle = color;
        this.context.strokeRect(obj.beginX, obj.beginY, obj.width, obj.height);
    }

    drawEllipse(obj, color) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.ellipse(obj.x, obj.y, obj.radiusX, obj.radiusY, 0, 0, 2 * Math.PI);
        this.context.stroke();
        this.context.closePath();
    }
}