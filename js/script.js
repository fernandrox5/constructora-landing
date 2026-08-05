// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => nav.classList.remove('open'))
);

// Placeholders: intenta cargar la foto real; si no existe, se ve el degradado de fondo
document.querySelectorAll('.placeholder-img').forEach(el => {
  const slot = el.dataset.slot;
  if (slot) el.style.backgroundImage = `url('${slot}'), var(--placeholder-gradient)`;
});

// Encabezado con sombra al hacer scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Animaciones al hacer scroll (fade + slide para secciones y tarjetas)
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// Formulario de contacto -> WhatsApp
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = contactForm.nombre.value.trim();
  const correo = contactForm.correo.value.trim();
  const telefono = contactForm.telefono.value.trim();
  const mensaje = contactForm.mensaje.value.trim();
  const texto = `Hola, soy ${nombre} (${telefono} / ${correo}). ${mensaje}`;
  window.open(`https://wa.me/56928246628?text=${encodeURIComponent(texto)}`, '_blank');
  contactForm.reset();
});
