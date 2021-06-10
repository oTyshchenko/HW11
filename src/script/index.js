import { Rect } from './Classes/Rect/Rect';
import { Ellipse } from './Classes/Ellipse/Ellipse';
import { Dot } from './Classes/Dot/Dot';

import './../style/style.scss';

const BTN = document.querySelector('#btn');
const tbody = document.getElementById('tbody');
const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');
const CANVAS_WIDTH = CANVAS.width;
const CANVAS_HEIGHT = CANVAS.height;

const getRandomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const getRandomRect = (color) => {
    const a = getRandomInteger(0, CANVAS_WIDTH);
    const b = getRandomInteger(0, CANVAS_HEIGHT);
    const c = getRandomInteger(0, CANVAS_WIDTH);
    const d = getRandomInteger(0, CANVAS_HEIGHT);
    return {
        beginX: Math.min(a, c),
        beginY: Math.min(b, d),
        width: Math.max(a, c) - Math.min(a, c),
        height: Math.max(b, d) - Math.min(b, d),
        color: color
    };
};

const crossChecker = (firstRect, secondRect) => {
    const a = firstRect.beginX + firstRect.width;
    const b = secondRect.beginX + secondRect.width;
    const c = firstRect.beginY + firstRect.height;
    const d = secondRect.beginY + secondRect.height;
    if (Math.min(a, b) > Math.max(firstRect.beginX, secondRect.beginX) &&
        Math.min(c, d) > Math.max(firstRect.beginY, secondRect.beginY)) {
        return {
            x: Math.max(firstRect.beginX, secondRect.beginX),
            y: Math.max(firstRect.beginY, secondRect.beginY),
            width: Math.min(a, b) - Math.max(firstRect.beginX, secondRect.beginX),
            height: Math.min(c, d) - Math.max(firstRect.beginY, secondRect.beginY)
        };
    };
};

const getEllipse = (obj, color) => ({
    x: obj.x + obj.width / 2,
    y: obj.y + obj.height / 2,
    radiusX: obj.width / 2,
    radiusY: obj.height / 2,
    color: color})

const getDot = (obj) => {
    const angle = Math.floor(Math.random() * Math.PI * 2);
    return {
        x: obj.x + Math.floor(Math.cos(angle) * obj.radiusX * Math.random()),
        y: obj.y + Math.floor(Math.sin(angle) * obj.radiusY * Math.random())
    };
};

const createTable = (obj) => {
    const tr = document.createElement('tr');
    const tdX = document.createElement('td');
    const tdY = document.createElement('td');
    tdX.classList.add('td');
    tdY.classList.add('td');
    tdX.textContent = obj.x;
    tdY.textContent = obj.y;
    tr.appendChild(tdX);
    tr.appendChild(tdY);
    tbody.appendChild(tr);
};

function start() {
    tbody.innerHTML = '';
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const blueRect = new Rect(getRandomRect('blue'));
    const redRect = new Rect(getRandomRect('red'));
    blueRect.drawRect(CTX);
    redRect.drawRect(CTX);
    const crossRect = crossChecker(blueRect, redRect);
    if (crossRect) {
        const newEllipse = new Ellipse(getEllipse(crossRect, 'black'));
        newEllipse.drawEllipse(CTX);
        let i = 0;
        while (i < 10) {
            const dotCoordinate = new Dot(getDot(newEllipse), 'darkred');
            dotCoordinate.drawDot(CTX);
            createTable(dotCoordinate);
            i++;
        };
    };
};

BTN.addEventListener('click', start);