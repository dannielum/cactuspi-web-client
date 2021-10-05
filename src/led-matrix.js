function setScrollingText() {
  const scrollingText = document.getElementById('scrollingText').value;

  setDisplayBoard(scrollingText);
}

function setDisplayBoard(message) {
  const marquee = document.getElementsByTagName('marquee');
  marquee[0].textContent = message;
}

module.exports = {
  setScrollingText,
  setDisplayBoard,
};
