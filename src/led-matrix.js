function setScrollingText() {
  const scrollingText = document.getElementById('scrollingText').value;

  const marquee = document.getElementsByTagName('marquee');
  marquee[0].textContent = scrollingText;
}

module.exports = setScrollingText;
