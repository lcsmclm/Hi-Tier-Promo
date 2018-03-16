(function (){
  var screenPOS;
  var windowHeight = window.innerHeight;
  var loc = false;
  var feat = false;

function scrollCrawl(){
var individualized = document.querySelector('#individualized');
var features = document.querySelector('#features');
screenPOS = window.scrollY;

var inTar = individualized.querySelector('.individualized-display-container > div');
var feTar = features.querySelector('.features-display-container > div');
if(!feat && screenPOS>features.offsetTop + 500){
  feTar.classList.toggle('init');
feat = true;
}

if(!loc && screenPOS>individualized.offsetTop + 400){
  inTar.classList.toggle('init');
loc = true;
}
}
  window.addEventListener("scroll", scrollCrawl, false);
}());
