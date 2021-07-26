/*jslint browser: true*/
var id;
var targetDelay = 250;
var turboCheck = false;
var animationName = "";
var turboClicked = false;

window.onload = function () {
    "use strict";
    var startButton = window.document.getElementById("start");
    startButton.onclick = function () { startAnimation("go") };
    var animationType = document.getElementById("animation");
    animationType.onchange = function () { animationChange(animationType.value) };
    document.getElementById("fontsize").onchange = changeFontSizeFunc;
    document.getElementById("stop").onclick = stopAnimation;
    document.getElementById("turbo").onchange = setSpeedFunc;
}
// start button
function startAnimation(s) {
    var textArea = document.getElementById("text-area");
    var textAreaValue;
    if (s !== "go") {
        textAreaValue = s;
        animationName = textAreaValue;
    }
    else {
        textAreaValue = textArea.innerHTML;
        animationName = textAreaValue;
        if (textAreaValue === "") {
            textArea.innerHTML = "NOT SELECTED! TRY AGAIN";
            return;
        }
    }
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    const splitted = textAreaValue.split("=====\n");
    var i = 0;
    id = setInterval(setAnimation, targetDelay)
    function setAnimation() {
        if (i === splitted.length)
            i = 0;
        textArea.innerHTML = splitted[i];
        i++;
    }
}
// stop button 
function stopAnimation() {
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    clearInterval(id);
    if (turboClicked) {
        document.getElementById("text-area").innerHTML = animationName.split("=====\n")[0];
        turboClicked = false;
    }
    else
        document.getElementById("text-area").innerHTML = animationName;
    document.getElementById("stop").disabled = true;
}
// animation change
function animationChange(s) {
    document.getElementById("start").disabled = false;
    stopAnimation();
    var whichOne = s;
    var textArea = document.getElementById("text-area");
    textArea.innerHTML = ANIMATIONS[whichOne];
}
// fontsize
function changeFontSizeFunc() {
    "use strict";
    var selectFontSize = document.getElementById("fontsize").value;
    var textArea = document.getElementById("text-area");
    switch (selectFontSize) {
      case "Tiny":
        textArea.style.fontSize = "7pt";
        break;
      case "Small":
        textArea.style.fontSize = "10pt";
        break;
      case "Medium":
        textArea.style.fontSize = "12pt";
        break;
      case "Large":
        textArea.style.fontSize = "16pt";
        break;
      case "Extra Large":
        textArea.style.fontSize = "24pt";
        break;
      case "XXL":
        textArea.style.fontSize = "32pt";
        break;
      default:
        textArea.value = "NOT SELECTED! TRY AGAIN";
        break;
    }
  }
  // turbo - speed
function setSpeedFunc() {
    turboCheck = document.getElementById("turbo").checked;
    if (turboCheck === true)
    targetDelay = 50;
    else
    targetDelay = 250;
    turboClicked = true;
    stopAnimation();
    startAnimation(ANIMATIONS[document.getElementById("animation").value]);
}
