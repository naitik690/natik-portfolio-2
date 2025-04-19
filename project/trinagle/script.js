let height = document.querySelector('.height');
let base = document.querySelector('.base');
let result = document.querySelector('.result');
let check = document.querySelector('.check ');


function area(){
    let a = Number(base.value);
    let b = Number(height.value);
    let area = 1/2 * a * b;
    result.innerHTML = area;
}

check.addEventListener('click', area);



  


const dark = document.getElementById("dark");
const light = document.getElementById("light");


function andehra(){
    document.body.style.backgroundColor = "black"; 
    document.body.style.color = "white"; 
}


function roshini(){
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black";
}


dark.addEventListener('click', andehra);
light.addEventListener('click', roshini);











































let   vadda= new Promise(function(resolve, reject){
  
    setTimeout(() => {
        resolve("done!");
        }, 2000);
    })
    .then (function(vadda){
    console.log(vadda);
    })




    let promise = new Promise(function(resolve, reject){
        resolve('done!');
       
        })
        .then (function(promise){
        console.log(promise);
        })
       
        let vada = new Promise(function(resolve, reject){
            setTimeout(() => {
                resolve("Data received");
                }, 2000);
            })
            .then (function(vada){
            console.log(vada);
            })

            
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("User data loaded");
    }, 1500); 
  });
}