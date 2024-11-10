const logo = document.querySelector(".logo");
const name = document.querySelector(".name");
const byName = document.querySelector(".logo span");
document.addEventListener("DOMContentLoaded", async () => {
  setTimeout(() => {
    show(logo);
  }, 1000);
  setTimeout(() => {
    show(byName);
  }, 2000);
  setTimeout(() => {
    show(name);
  }, 3000);
  setTimeout(() => {
    let name = new Typed(".name", {
      strings: ["Zaw Min Soe"],
      typeSpeed: 100,
    });
  }, 3000);

  await hide()
});

function show(ele) {
  ele.style.display = "block";
}
let typed = new Typed(".filename", {
  strings: ["TODO LIST APP"],
  typeSpeed: 100,
  loop: false,
});

function hide() {
  setTimeout(() => {
    document.querySelector(".starterPage").style.display = "none";
  }, 7000);
}
