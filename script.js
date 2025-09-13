function ajustarAltura() {
  const main = document.querySelector('main');
  main.style.minHeight = window.innerHeight * 0.6 + 'px'; // 60% de la altura
}

window.addEventListener('resize', ajustarAltura);
window.addEventListener('load', ajustarAltura);

// --- Acordeón ---
const botones = document.querySelectorAll('.acordeon-btn');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const contenido = boton.nextElementSibling;

    // Cierra otros elementos si quieres comportamiento exclusivo
    botones.forEach(b => {
      if (b !== boton) {
        b.classList.remove('activo');
        b.nextElementSibling.style.maxHeight = null;
      }
    });

    boton.classList.toggle('activo');
    if (boton.classList.contains('activo')) {
      contenido.style.maxHeight = contenido.scrollHeight + 'px';
    } else {
      contenido.style.maxHeight = null;
    }
  });
});

