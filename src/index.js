import './style/style.css'

const getCanvas2dContext = (elem) => {
    const canvas = document.querySelector(elem);
    const ctx = canvas.getContext('2d');
    return ctx;
}

const randomNumberFrom0toN = (n) => Math.floor(Math.random()*n);

const drowRandomSquare = (color, elem) => {
    let beginX = randomNumberFrom0toN(document.querySelector(elem).width);
    let beginY = randomNumberFrom0toN(document.querySelector(elem).height);
    let width = randomNumberFrom0toN(document.querySelector(elem).width);
    let height = randomNumberFrom0toN(document.querySelector(elem).height);

    while ((beginX + width > document.querySelector(elem).width)) {
        beginX = randomNumberFrom0toN(document.querySelector(elem).width);
        width = randomNumberFrom0toN(document.querySelector(elem).width);
    }

    while ((beginY + height > document.querySelector(elem).height)) {
        beginY = randomNumberFrom0toN(document.querySelector(elem).height);
        height = randomNumberFrom0toN(document.querySelector(elem).height);
    }

    getCanvas2dContext(elem).strokeStyle = color;
    getCanvas2dContext(elem).strokeRect(beginX, beginY, width, height);
    
    return [beginX, beginY, width, height];
}

const markerPointX = (begin, long, elem) => {
    let arr = [];
    for (let i = 0; i < document.querySelector(elem).width; i++) {
        if (i >= begin && i <= (begin+long)) {
            arr[i] = 1;
        } else {
            arr[i] = 0;
        }
    }
    return arr;
}
const markerPointY = (begin, long, elem) => {
    let arr = [];
    for (let i = 0; i < document.querySelector(elem).height; i++) {
        if (i >= begin && i <= (begin+long)) {
            arr[i] = 1;
        } else {
            arr[i] = 0;
        }
    }
    return arr;
}

const newSquareMarkerX = (arrOfMarker1, arrOfMarker2, elem) => {
    let arr = [];
    for (let i = 0; i < document.querySelector(elem).width; i++) {
        if (arrOfMarker1[i] === 1 & arrOfMarker2[i] === 1) {
            arr[i] = 1;
        } else {
            arr[i] = 0;
        }
    }
    return arr;
}

const newSquareMarkerY = (arrOfMarker1, arrOfMarker2, elem) => {
    let arr = [];
    for (let i = 0; i < document.querySelector(elem).width; i++) {
        if (arrOfMarker1[i] === 1 & arrOfMarker2[i] === 1) {
            arr[i] = 1;
        } else {
            arr[i] = 0;
        }
    }
    return arr;
}

const crossChecker = ([beginX, beginY, width, height],[beginXSecond, beginYSecond, widthSecond, heightSecond], elem) => {
    let redX = markerPointX(beginX, width, elem);
    let blueX = markerPointX(beginXSecond, widthSecond, elem);
    let resX = newSquareMarkerX(blueX, redX, elem);
    let redY = markerPointY(beginY, height, elem);
    let blueY = markerPointY(beginYSecond, heightSecond, elem);
    let resY = newSquareMarkerY(blueY, redY, elem);
    return [resX, resY];
}

const getElipsRadius = (markerArr) => {
    let diametr = 0;
    for (let i = 0; i < markerArr.length; i++) {
        diametr = +markerArr[i] + +diametr;
    }
    let radius = diametr/2;
    return radius;
}

const drawElips = ([markerX, markerY, elem]) => {
    let radiusX = getElipsRadius(markerX);
    let radiusY = getElipsRadius(markerY);
    let centrX = radiusX + markerX.indexOf(1) -0.5;
    let centrY = radiusY + markerY.indexOf(1) -0.5;
    getCanvas2dContext('#canvas').beginPath();
    getCanvas2dContext('#canvas').strokeStyle = 'green';
    getCanvas2dContext('#canvas').ellipse(centrX, centrY, radiusX, radiusY, 0, 0, 2 * Math.PI);
    getCanvas2dContext('#canvas').fillStyle = "silver";
    getCanvas2dContext('#canvas').fill();
    getCanvas2dContext('#canvas').stroke();
    getCanvas2dContext('#canvas').closePath();
    return [centrX, centrY, radiusX, radiusY];
}

let arrX = [];
let arrY = [];
const drawDots = ([centrX, centrY, radiusX, radiusY]) => {
    getCanvas2dContext('#canvas').beginPath();
    getCanvas2dContext('#canvas').strokeStyle = 'darkred';
    let angle = Math.floor(Math.random()*Math.PI*2);
    let x = centrX + Math.floor(Math.cos(angle)*radiusX*Math.random());
    let y = centrY + Math.floor(Math.sin(angle)*radiusY*Math.random());
    getCanvas2dContext('#canvas').arc(x, y, 1, 0, Math.PI/180 * 360);
    getCanvas2dContext('#canvas').fillStyle = "darkred";
    getCanvas2dContext('#canvas').fill();
    getCanvas2dContext('#canvas').stroke();
    getCanvas2dContext('#canvas').closePath();
    arrX.push(x);
    arrY.push(y);
}

const btn = document.querySelector('#btn');
function start() {
    arrX = [];
    arrY = [];
    getCanvas2dContext('#canvas').clearRect(0, 0, 300, 300);
    let qq = crossChecker(drowRandomSquare('red', '#canvas'),drowRandomSquare('blue', '#canvas'), '#canvas');
    let qqq = drawElips(qq);
    let gox = document.querySelectorAll(`.gox`);
    let goy = document.querySelectorAll(`.goy`);
    let i = 0;
    while (i !== 10) {
        drawDots(qqq);
        i++;
    }
    if (arrX[0] > 0 && arrY[0] > 0) {
        for (let i = 0; i < 10; i++) {
            gox[i].innerHTML = arrX[i];
            goy[i].innerHTML = arrY[i];
        } 
    } else {
        for (let i = 0; i < 10; i++) {
            gox[i].innerHTML = '';
            goy[i].innerHTML = '';
        } 
    }
}
btn.addEventListener('click', start);