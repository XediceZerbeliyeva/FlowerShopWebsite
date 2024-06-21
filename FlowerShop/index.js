// header section starts
let menuIcon = document.querySelector(".menuIcon i");
let navbar = document.querySelector("nav");
let menu = document.querySelector(".menuIcon")
let deleteIcon = document.createElement("i");
deleteIcon.setAttribute("class", "fa-solid fa-x");
menu.appendChild(deleteIcon);
deleteIcon.style.display = "none";
deleteIcon.style.fontSize = "30px";
menuIcon.addEventListener("click", () => {
  navbar.style.display = "block";
  deleteIcon.style.display = "block";
  menuIcon.style.display = "none";
  deleteIcon.addEventListener("click", () => {
    navbar.style.display = "none";
    deleteIcon.style.display = "none";
    menuIcon.style.display = "block"
  })
})
// header section ends
// about section starts
let LearnBtn = document.querySelector(".LearnBtn");
var moreText = document.getElementById("more");
var dots = document.getElementById("dots");
LearnBtn.addEventListener("click", () => {
  if (dots.style.display == "none") {
    dots.style.display = "inline";
    LearnBtn.innerHTML = "Read more";
    moreText.style.display = "none";

  } else {
    dots.style.display = "none";
    LearnBtn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
})
// about section ends

