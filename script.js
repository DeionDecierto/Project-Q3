let baseFare = 50;
let perKMrate = 15;
let baseKM = 2;

function getDistance() {

let start = parseInt(document.getElementById("pickup").value);
let end = parseInt(document.getElementById("dropoff").value);

return Math.abs(end - start);

}

function regularFare() {

let distance = getDistance();
let fare = baseFare;

if(distance > baseKM){
fare += (distance - baseKM) * perKMrate;
}

document.getElementById("fare").innerHTML = "₱ " + fare.toFixed(2);

}

function discountFare() {

let distance = getDistance();
let fare = baseFare;

if(distance > baseKM){
fare += (distance - baseKM) * perKMrate;
}

fare = fare * 0.8;

document.getElementById("fare").innerHTML = "₱ " + fare.toFixed(2);

}

function updateMap() {

let start = parseInt(document.getElementById("pickup").value);
let end = parseInt(document.getElementById("dropoff").value);

let stations = document.querySelectorAll(".station");

stations.forEach(function(s){
s.classList.remove("active");
});

let min = Math.min(start,end);
let max = Math.max(start,end);

for(let i = min; i <= max; i++){
stations[i].classList.add("active");
}

}

window.onload = function(){
updateMap();
};


const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const imgPreview = document.getElementById("imgPreview");
const form = document.getElementById("regForm");
const age = document.getElementById("age");

function openFile(){
fileInput.click();
}

fileInput.addEventListener("change", function(){

const file = this.files[0];

if(file){

fileName.textContent = file.name;

const reader = new FileReader();

reader.onload = function(e){
imgPreview.style.backgroundImage = "url('" + e.target.result + "')";
}

reader.readAsDataURL(file);

}

});

form.addEventListener("submit", function(e){

if(age.value < 18){
alert("You must be 18 or older to register.");
e.preventDefault();
}else{
alert("Account Created Successfully!");
}


});
