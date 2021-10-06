function setScrollingText() {
  const scrollingText = document.getElementById('scrollingText').value;

  setDisplayBoard(scrollingText);
}

function setInitMessage(initMessage) {
  document.getElementById('initMessage').textContent = initMessage;

  setTimeout(() => {
    hideLedMatrixBoard();
    displayTimer();
  }, 10000);
}

function setDisplayBoard(message, duration, repeat = false) {
  const marquee = document.getElementById('ledMatrixBoard');
  marquee.textContent = message;
  marquee.style.display = 'block';
  marquee.start();
  hideTimer();

  if (duration && !repeat) {
    setTimeout(() => {
      hideLedMatrixBoard();
      displayTimer();
    }, duration * 1000);
  }
}

function startTimer() {
  setInterval(() => {
    const timer = document.getElementById('timer');
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const seconds = date.getSeconds();
    const time = `${prefixZero(hours % 12)}:${prefixZero(minutes)}:${prefixZero(
      seconds
    )} ${ampm}`;
    timer.textContent = `${date.toDateString()} ${time}`;
  }, 1000);
}

function prefixZero(num) {
  return `${num < 10 ? '0' : ''}${num}`;
}

function displayTimer() {
  const timer = document.getElementById('timer');
  timer.style.display = 'block';
}

function hideLedMatrixBoard() {
  const marquee = document.getElementById('ledMatrixBoard');
  marquee.style.display = 'none';
}

function hideTimer() {
  const timer = document.getElementById('timer');
  timer.style.display = 'none';
}

module.exports = {
  setScrollingText,
  setInitMessage,
  setDisplayBoard,
  displayTimer,
  startTimer,
};
