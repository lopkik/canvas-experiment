let colorWell;
let defaultColor = "#0000ff";

window.addEventListener("load", startup, false);

function startup() {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  context.strokeStyle = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(e) {
  let p = document.querySelector("p");

  if (p) {
    p.style.color = e.target.value;
  }
}

function updateAll(e) {
  document.querySelectorAll("p").forEach(function (p) {
    p.style.color = e.target.value;
  });
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  context.strokeStyle = e.target.value;
}
