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