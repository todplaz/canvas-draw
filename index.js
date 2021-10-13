const canvas = document.getElementById("art");
// console.log(canvas);
const ctx = canvas.getContext("2d");

function getMousePos (e) {
  const rect =canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}

function mouseMove (e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y); //lineTo permet de dessiner une ligne
  ctx.stroke();
  ctx.strokeStyle = "salmon";
  ctx.lineWidth = 10;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  const mousePos = getMousePos(e);
  
  ctx.beginPath(); //signifie en quelque sorte, "tu vas commencer a dessiner quelque chose"
  ctx.moveTo(mousePos.x, mousePos.y); //on localise la position de x et y dans le rectangle

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {
    canvas.removeEventListener("mousemove", mouseMove);
  });

});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})