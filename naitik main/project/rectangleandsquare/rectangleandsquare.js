let length = document.querySelector(".length");
let breadth = document.querySelector(".breadth");
let btn = document.querySelector(".button");
let out = document.querySelector(".output");

function rectangle(){
    let a = Number(length.value);
    let b = Number(breadth.value);
    let c = 2*(a+b);
    out.textContent = `this is the perimeter of rectangle ${c}`;
}

btn.addEventListener('click', rectangle);


let arealength = document.querySelector(".area_length");
let areawidth = document.querySelector(".area_width");
let button = document.querySelector(".checkarea");
let outarea = document.querySelector(".outarea");

function area(){
    let length = Number(arealength.value);
    let width = Number(areawidth.value);
    let output = length*width;
    outarea.textContent = `It is the area of rectangle ${output}`;
}

button.addEventListener('click', area);



let squarep = document.querySelector(".perimeterofsquare");
let squareb = document.querySelector(".outperimeter");
let check = document.querySelector(".squareperimeter");

function perimeter(){
    let al = Number(squarep.value);
    let os = al*1/4;
    squareb.textContent = `It is the perimeter of square ${os}`;
}

check.addEventListener('click', perimeter);


let squareside = document.querySelector(".noofside");
let areabtn = document.querySelector(".squarearea");
let outofas = document.querySelector(".outperimetera");

function areaofsquare(){
let side = Number(squareside.value);
let sideofs = side*side;
outofas.textContent = `It is the each side of a square ${sideofs}`;
}

areabtn.addEventListener('click', areaofsquare);