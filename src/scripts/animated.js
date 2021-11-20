ScrollOut({
  threshold: 0.2,
  once: true,
  onShown: function (el) {
    const div = el.children;
    if (div[0].localName === "div") {
      div[0]?.children[0]?.classList.add("animate-openLoad");
      div[0]?.children[1]?.classList.add("animate-openLoadReverse");
    }
  },
});

const container = document.getElementById("carousel-container");
const itens = document.querySelectorAll("#carousel-container .carousel-item");

let time = 5000,
  currentIndex = 0,
  max = itens.length;

function nextItem() {
  itens[currentIndex].classList.toggle("carousel-selected");
  currentIndex++;
  if (currentIndex >= max) currentIndex = 0;
  itens[currentIndex].classList.toggle("carousel-selected");
}

function start() {
  setInterval(() => {
    nextItem();
  }, time);
}

window.addEventListener("load", start);
