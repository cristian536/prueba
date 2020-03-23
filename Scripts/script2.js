var puntajeColombia = document.getElementById('score1');
var puntajeArgentina = document.getElementById('score2');
var puntajeGanar = document.getElementById('puntajeGanar');
var bColombia = document.getElementById('bColombia');
var bArgentina = document.getElementById('bArgentina');
var bReset = document.getElementById('reset');
var gameOver = false;

bEquipo1.addEventListener('click', function() {
  if (!gameOver) {
    puntajeColombia.innerText = +Colombia.innerText + 1;
    if (+puntajeColombia.innerText == +puntajeGanar.innerText) {
      puntajeColombia.classList.add('ganador');
      gameOver = true;
    }
  }
});

bEquipo2.addEventListener('click', function() {
  if (!gameOver) {
    puntajeArgentina.innerText = +puntajeArgentina.innerText + 1;
    if (+puntajeArgentina.innerText == +puntajeGanar.innerText) {
      puntajeArgentina.classList.add('ganador');
      gameOver = true;
    }
  }
});

bReset.addEventListener('click', function() {
  puntajeColombia.innerText = 0;
  puntajeArgentina.innerText = 0;
  puntajeGanar.innerText = 10;
  puntajeColombia.classList.remove('ganador');
  puntajeArgentina.classList.remove('ganador');
  puntajeGanar.classList.remove('ganador');
  gameOver = false;
});

puntajeGanar.addEventListener('click', function() {
  puntajeGanar.innerText = 10;
  gameOver = false;
});
