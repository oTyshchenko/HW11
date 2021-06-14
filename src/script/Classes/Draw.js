class Draw {
    static drawDot(ctx, obj) {
        ctx.beginPath();
        ctx.strokeStyle = obj.color;
        ctx.arc(obj.x, obj.y, 1, 0, (Math.PI / 180) * 360);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }

    static drawRect(ctx, obj) {
        ctx.strokeStyle = obj.color;
        ctx.strokeRect(obj.beginX, obj.beginY, obj.width, obj.height);
    }

    static drawEllipse(ctx, obj) {
        ctx.beginPath();
        ctx.strokeStyle = obj.color;
        ctx.ellipse(obj.x, obj.y, obj.radiusX, obj.radiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();
    }
}

export { Draw };