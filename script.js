//DOM elements

const startBtn = document.querySelector(".start"),
  stopBtn = document.querySelector(".stop"),
  resetBtn = document.querySelector(".reset");

let hr = (min = sec = ms = "0" + 0),
  startTimer;

// Adding event listners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stopp);
resetBtn.addEventListener("click", reset);

function start(params) {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;

    if (ms < 10) {
      ms = "0" + ms;
    }

    if (ms === 100) {
      sec++;
      ms = "0" + 0;
      if (sec < 10) {
        sec = "0" + sec;
      }
    }

    if (sec === 60) {
      min++;
      sec = "0" + 0;
      if (min < 10) {
        min = "0" + min;
      }
    }

    if (min === 60) {
      hr++;
      min = "0" + 0;
      if (hr < 10) {
        hr = "0" + hr;
      }
    }

    putValue();
  }, 10); // 1000ms = 1s
}
function stopp(params) {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTimer);
}
function reset(params) {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  putValue();
}

function putValue() {
  document.querySelector(".miliSecond").innerHTML = ms;
  document.querySelector(".second").innerHTML = sec;
  document.querySelector(".minute").innerHTML = min;
  document.querySelector(".hour").innerHTML = hr;
}
