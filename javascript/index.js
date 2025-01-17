const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
  
}

function printMinutes() {
  
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  //console.log(minutes);
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];

}

function printSeconds() {

  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  //console.log(seconds);
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];

}

// ==> BONUS
function printMilliseconds() {
  let milliseconds = chronometer.computeTwoDigitNumber(chronometer.getMilliseconds());

  milDecElement.innerHTML = milliseconds[0];
  milUniElement.innerHTML = milliseconds[1];
}

function printSplit() {

  let splitOl = document.querySelector('#splits');
  splitOl.innerHTML += `<li>  ${minDecElement.innerText}${minUniElement.innerText} : ${secDecElement.innerText}${secUniElement.innerText} : ${milDecElement.innerText}${milUniElement.innerText}</li>`

 
}

function clearSplits() {
  //chronometer.clearInterval();
  chronometer.reset();
  let liParent = document.querySelector('#splits');
  liParent.innerHTML = `<ol id="splits"></ol>`;
}

function setStopBtn() {
  let stopBtn = document.querySelector("#btnLeft");
  stopBtn.setAttribute('class', 'btn stop')
  stopBtn.textContent = "STOP";
}

function setSplitBtn() {
  let splitBtn = document.querySelector('#btnRight');
  splitBtn.setAttribute('class', 'btn split');
  splitBtn.textContent = "SPLIT";
}

function setStartBtn() {
  
  let startBtn = document.querySelector('#btnLeft');
  startBtn.setAttribute('class', 'btn start');
  startBtn.textContent = "START";
  
  

}

function setResetBtn() {
  let resetBtn = document.querySelector('#btnRight');
  resetBtn.setAttribute('class', 'btn reset');
  resetBtn.textContent = "RESET"

}

function colorAnimation() {
  let animatedElement = document.querySelector('#sphere');
  animatedElement.setAttribute('class', 'sphere-animation');
  let animatedElement2 = document.querySelector('#clock');
  animatedElement2.setAttribute('class', 'clock-animation');
}

function resetColorAnimation() {
  let animatedElement = document.querySelector('#sphere');
  animatedElement.removeAttribute('class', 'sphere-animation');
  let animatedElement2 = document.querySelector('#clock');
  animatedElement2.removeAttribute('class', 'clock-animation');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  
  if (btnLeftElement.className === 'btn stop') {
    chronometer.stop();
    setStartBtn();
    setResetBtn();
    resetColorAnimation();
    
  } else {
    chronometer.start(printTime);
    setStopBtn();
    setSplitBtn();
    colorAnimation();
  }

  



  

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if (btnRightElement.className === 'btn reset') {
    
    clearSplits();
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
    milUniElement.innerHTML = 0;

  } else {
    
    printSplit();
  }

  

});
