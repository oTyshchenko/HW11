import { Rect } from './Classes/Rect/Rect';
import { EllipseInRect } from './Classes/EllipseInRect/EllipseInRect';
import { Dot } from './Classes/Dot/Dot';
import { Table } from './Classes/Table';
import { Draw } from './Classes/Draw';

import './../style/style.scss';

const BTN = document.getElementById('btn');
const tbody = document.getElementById('tbody');
const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');
const WIDTH = CANVAS.width;
const HEIGHT = CANVAS.height;
const numberOfDot = 10;

const start = () => {
    tbody.innerHTML = '';
    CTX.clearRect(0, 0, WIDTH, HEIGHT);
    const blueRect = new Rect(Dot.randomDot(WIDTH, HEIGHT),Dot.randomDot(WIDTH, HEIGHT), 'blue');
    const redRect = new Rect(Dot.randomDot(WIDTH, HEIGHT),Dot.randomDot(WIDTH, HEIGHT), 'red');
    Draw.drawRect(CTX, blueRect);
    Draw.drawRect(CTX, redRect);
    const crossRect = blueRect.crossRect(redRect);
    if (crossRect) {
        const newEllipse = new EllipseInRect(crossRect, 'black');
        Draw.drawEllipse(CTX, newEllipse);
        let i = 0;
        while (i < numberOfDot) {
            const dotCoordinate = new Dot(Dot.getRandomDotInEllipse(newEllipse), 'darkred');
            Draw.drawDot(CTX, dotCoordinate);
            Table.createTable(dotCoordinate, tbody, 'td')
            i++;
        };
    };
};

BTN.addEventListener('click', start);