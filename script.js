const objects = document.querySelectorAll(".planet");
const btn = document.getElementById("toggleGravity");

let gravityOn = false;
let velocities = [];

function init() {
  objects.forEach((obj, i) => {
    // posición inicial aleatoria
    obj.style.left = Math.random() * (window.innerWidth - 100) + "px";
    obj.style.top = Math.random() * (window.innerHeight - 100) + "px";

    // velocidad inicial aleatoria
    velocities[i] = {
      x: (Math.random() * 2 - 1) * 1.5,
      y: (Math.random() * 2 - 1) * 1.5,
    };
  });
}

function updatePositions() {
  objects.forEach((obj, i) => {
    const rect = obj.getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;

    if (gravityOn) {
      // gravedad hacia abajo
      velocities[i].y += 0.15;
    } else {
      // levitación libre distribuida
      velocities[i].x += (Math.random() - 0.5) * 0.05; // wander horizontal
      velocities[i].y += (Math.random() - 0.5) * 0.05; // wander vertical

      // limitar velocidad máxima
      velocities[i].x = Math.max(Math.min(velocities[i].x, 2), -2);
      velocities[i].y = Math.max(Math.min(velocities[i].y, 2), -2);
    }

    x += velocities[i].x;
    y += velocities[i].y;

    // rebotes horizontales
    if (x <= 0) {
      x = 0;
      velocities[i].x *= -1;
    }
    if (x >= window.innerWidth - rect.width) {
      x = window.innerWidth - rect.width;
      velocities[i].x *= -1;
    }

    // rebotes verticales
    if (y <= 0) {
      y = 0;
      velocities[i].y *= -1;
    }
    if (y >= window.innerHeight - rect.height) {
      y = window.innerHeight - rect.height;
      velocities[i].y *= -1;
    }

    obj.style.left = x + "px";
    obj.style.top = y + "px";
  });

  requestAnimationFrame(updatePositions);
}

btn.addEventListener("click", () => {
  gravityOn = !gravityOn;
  if (gravityOn) {
    btn.textContent = "Gravedad ON";
  } else {
    btn.textContent = "Gravedad OFF";

    // pequeño impulso aleatorio al desactivar gravedad
    velocities.forEach((v) => {
      v.x = (Math.random() * 2 - 1) * 1.5;
      v.y = (Math.random() * 2 - 1) * 1.5;
    });
  }
});

init();
updatePositions();
