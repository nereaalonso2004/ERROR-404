/* Cuenta atrás de 3 minutos */
let time = 180;

const timer = document.getElementById("timer");

const interval = setInterval(() => {
  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  
  timer.textContent = `${minutes}:${seconds}`;

  if (time <= 0) {
    clearInterval(interval);
    timer.textContent = "00:00";
  }

  time--;

}, 1000);

/* Botón para volver */
// function goBack() {
//   window.history.back();
// }
