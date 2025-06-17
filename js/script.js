document.addEventListener('DOMContentLoaded', function () {
  const botaoProjetos = document.querySelector('.btn');
  const secaoProjetos = document.querySelector('#projetos');

  botaoProjetos.addEventListener('click', function (e) {
    e.preventDefault();
    secaoProjetos.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hero.classList.add('hide-on-scroll');
  } else {
    hero.classList.remove('hide-on-scroll');
  }
});

// Botão scrool rodapé
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
