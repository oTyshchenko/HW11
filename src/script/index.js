import { Rect } from './Classes/Rect/Rect';
import { EllipseInRect } from './Classes/EllipseInRect/EllipseInRect';
import { Dot } from './Classes/Dot/Dot';
import { Table } from './Classes/Table';
import { Draw } from './Classes/Draw';

import './../style/style.scss';

const BTN = document.getElementById('btn');
const table = new Table(document.getElementById('tbody'));
const CANVAS = document.getElementById('canvas');
const drowingArea = new Draw(CANVAS.getContext('2d'));
const numberOfDot = 10;

BTN.addEventListener('click', () => {
    const firstRect = new Rect(Dot.randomDot(CANVAS.width, CANVAS.height), Dot.randomDot(CANVAS.width, CANVAS.height));
    const secondRect = new Rect(Dot.randomDot(CANVAS.width, CANVAS.height), Dot.randomDot(CANVAS.width, CANVAS.height));
    const crossRect = firstRect.crossRect(secondRect);

    drowingArea.clearRect(CANVAS.width, CANVAS.height);
    drowingArea.drawRect(firstRect, 'blue');
    drowingArea.drawRect(secondRect, 'red');

    table.clearTable();

    if (crossRect) {
        const newEllipse = new EllipseInRect(crossRect, 'black');

        drowingArea.drawEllipse(newEllipse, 'green');

        let i = 0;
        while (i < numberOfDot) {
            const dotCoordinate = newEllipse.getRandomDotInEllipse();

            drowingArea.drawDot(dotCoordinate, 'darkred');
            
            table.createTable(dotCoordinate, 'td');
            i++;
        };
    };
});