var arr;

function adicionEventos() {
  arr = document.querySelectorAll('li');

  for (obj of arr) {
    obj.addEventListener('mouseover', function() {
      this.classList.add('movimiento');
    });

    obj.addEventListener('mouseout', function() {
      this.classList.remove('movimiento');
    });

    obj.addEventListener('click', function() {
      this.classList.add('completado');
    });
  }
}
