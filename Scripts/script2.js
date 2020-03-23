var puntajeEquipo1 = document.getElementById('score1');
var puntajeEquipo2 = document.getElementById('score2');
var puntajeGanar = document.getElementById('puntajeGanar');
var bEquipo1 = document.getElementById('bEquipo1');
var bEquipo2 = document.getElementById('bEquipo2');
var bReset = document.getElementById('reset');
var gameOver = false;

bEquipo1.addEventListener('click', function() {
  if (!gameOver) {
    puntajeEquipo1.innerText = +puntajeEquipo1.innerText + 1;
    if (+puntajeEquipo1.innerText == +puntajeGanar.innerText) {
      puntajeEquipo1.classList.add('ganador');
      gameOver = true;
    }
  }
});

bEquipo2.addEventListener('click', function() {
  if (!gameOver) {
    puntajeEquipo2.innerText = +puntajeEquipo2.innerText + 1;
    if (+puntajeEquipo2.innerText == +puntajeGanar.innerText) {
      puntajeEquipo2.classList.add('ganador');
      gameOver = true;
    }
  }
});

bReset.addEventListener('click', function() {
  puntajeEquipo1.innerText = 0;
  puntajeEquipo2.innerText = 0;
  puntajeGanar.innerText = 9;
  puntajeEquipo1.classList.remove('ganador');
  puntajeEquipo2.classList.remove('ganador');
  puntajeGanar.classList.remove('ganador');
  gameOver = false;
});

puntajeGanar.addEventListener('click', function() {
  puntajeGanar.innerText = 9;
  gameOver = false;
});
