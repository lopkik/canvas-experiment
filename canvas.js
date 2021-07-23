window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");

  // resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  window.addEventListener("resize", () => {
    canvas.style.height = window.innerHeight;
    canvas.style.width = window.innerWidth;
  });

  // drawing tracking
  let painting = false;
  // context.strokeStyle = "rgb(200,0,0)";

  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    context.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    context.lineWidth = 10;
    context.lineCap = "round";

    context.lineTo(e.clientX, e.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  // eventlisteners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
});
