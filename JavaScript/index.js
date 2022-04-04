function buttonClicked() {
  document.getElementById("button").classList.toggle("clicked");
}

function windowLoaded() {
  console.log('loaded');
  document.getElementById("button").addEventListener("click", buttonClicked);
  document.getElementById("How Goes It").addEventListener("mouseover",HowGoesItClicked);
}
window.onload = windowLoaded;

function HowGoesItClicked(event) {
  event.target.innerHTML = "My Name Is Clara"
}
