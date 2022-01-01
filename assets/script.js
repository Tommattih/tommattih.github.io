// PREVENT LOAD
const preload = document.querySelector("div.preload");

function loading(){
  document.getElementsByClassName("preload")[0].style.display = "none";
  document.getElementsByClassName("content")[0].style.display = "block";
}
