/* Cuenta atrás de 3 minutos */
// let time = 180;

// const timer = document.getElementById("timer");

// const interval = setInterval(() => {
//   const minutes = String(Math.floor(time / 60)).padStart(2, "0");
//   const seconds = String(time % 60).padStart(2, "0");

//   timer.textContent = `${minutes}:${seconds}`;

//   if (time <= 0) {
//     clearInterval(interval);
//     timer.textContent = "00:00";
//   }

//   time--;

// }, 1000);

/* Botón para volver */
// function goBack() {
//   window.history.back();
// }

const objects = document.querySelectorAll(".planet");
const btn = document.getElementById("toggleGravity");

let gravityOn = false;
let velocities = [];

function init() {
  objects.forEach((obj, i) => {
    // Posición inicial aleatoria
    obj.style.left = Math.random() * (window.innerWidth - 100) + "px";
    obj.style.top = Math.random() * (window.innerHeight - 150) + "px";

    // Velocidad inicial
    velocities[i] = {
      x: (Math.random() * 2 - 1) * 2,
      y: (Math.random() * 2 - 1) * 2,
    };
  });
}

function updatePositions() {
  objects.forEach((obj, i) => {
    const rect = obj.getBoundingClientRect();

    if (gravityOn) {
      velocities[i].y += 0.15;
    }

    let newX = rect.left + velocities[i].x;
    let newY = rect.top + velocities[i].y;

    // Bordes horizontales
    if (newX <= 0 || newX >= window.innerWidth - rect.width) {
      velocities[i].x *= -1;
    }

    // Bordes verticales
    if (newY <= 0 || newY >= window.innerHeight - rect.height) {
      velocities[i].y *= -0.8;
    }

    obj.style.left = newX + "px";
    obj.style.top = newY + "px";
  });

  requestAnimationFrame(updatePositions);
}

btn.addEventListener("click", () => {
  gravityOn = !gravityOn;

  if (gravityOn) {
    objects.forEach((obj) => (obj.style.animation = "none"));
  } else {
    objects.forEach(
      (obj) => (obj.style.animation = "float 6s infinite ease-in-out")
    );
  }
});

init();
updatePositions();
