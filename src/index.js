import './style/style.scss';

const BTN = document.querySelector('#btn');
const tbody = document.getElementById('tbody');
const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');
const CANVAS_WIDTH = CANVAS.width;
const CANVAS_HEIGHT = CANVAS.height;

const getRandomInteger = (min, max) => {return Math.floor(min + Math.random() * (max + 1 - min))};

const getRandomRect = () => {
    const a = getRandomInteger(0, CANVAS_WIDTH);
    const b = getRandomInteger(0, CANVAS_HEIGHT);
    const c = getRandomInteger(0, CANVAS_WIDTH);
    const d = getRandomInteger(0, CANVAS_HEIGHT);
    const x = Math.min(a, c);
    const y = Math.min(b, d);
    const width = Math.max(a, c) - Math.min(a, c);
    const height = Math.max(b, d) - Math.min(b, d);
    return [x, y, width, height];
};

const drawRect = (color, [x, y, width, height]) => {
    CTX.strokeStyle = color;
    CTX.strokeRect(x, y, width, height);
};

const crossChecker = ([x, y, width, height], [X, Y, WIDTH, HEIGHT]) => {
    const a = x + width;
    const b = X + WIDTH;
    const c = y + height;
    const d = Y + HEIGHT;
    if (Math.min(a, b) > Math.max(x, X) && Math.min(c, d) > Math.max(y, Y)) {
        return {x: Math.max(x,X), y: Math.max(y,Y), width: Math.min(a,b)-Math.max(x,X), 
            height: Math.min(c,d)-Math.max(y,Y)};
    };
};

const getEllipse = ({x, y , width, height}) => {
    const radiusX = width/2;
    const radiusY = height/2;
    const centrX = x + radiusX;
    const centrY = y + radiusY;
    return {x: centrX, y: centrY, radiusX: radiusX, radiusY: radiusY,};   
};

const drawEllipse = (color, {x, y, radiusX, radiusY,}) => {
    CTX.beginPath();
    CTX.strokeStyle = color;
    CTX.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
    CTX.stroke();
    CTX.closePath();
};

const getDot = ({x, y, radiusX, radiusY,}) => {
    const angle = Math.floor(Math.random() * Math.PI * 2);
    const dotX = x + Math.floor(Math.cos(angle) * radiusX * Math.random());
    const dotY = y + Math.floor(Math.sin(angle) * radiusY * Math.random());
    return {x: dotX, y: dotY};
};

const drawDot = (color, {x, y}) => {
    CTX.beginPath();
    CTX.strokeStyle = color;
    CTX.arc(x, y, 1, 0, (Math.PI / 180) * 360);
    CTX.fillStyle = 'darkred';
    CTX.fill();
    CTX.stroke();
    CTX.closePath();
};

const createTable = ({x,y}) => {
    const tr = document.createElement('tr');
    const tdX = document.createElement('td');
    const tdY = document.createElement('td');
    tdX.classList.add('td');
    tdY.classList.add('td');
    tdX.textContent = x;
    tdY.textContent = y;
    tr.appendChild(tdX);
    tr.appendChild(tdY);
    tbody.appendChild(tr);
};

function start() {
    tbody.innerHTML = '';
    CTX.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const firstRect = getRandomRect();
    const secondRect = getRandomRect();
    drawRect('red', firstRect);
    drawRect('blue', secondRect);
    const crossRect = crossChecker(firstRect, secondRect);
    if (crossRect) {
        const newEllipse = getEllipse(crossRect);
        drawEllipse('green', newEllipse);
        let i = 0;
        while (i < 10) {
            const dotCoordinate = getDot(newEllipse);
            drawDot('darkred', dotCoordinate);
            createTable(dotCoordinate);
            i++;
        };
    };
};

BTN.addEventListener('click', start);