function popBalloon() {
  document.getElementsByTagName("img")[Math.floor(Math.random() * 5)].style.display = "block";
}
document.getElementById("button").addEventListener("click", popBalloon);
