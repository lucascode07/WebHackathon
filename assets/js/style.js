
/*-------------------------CARRUSEL---------------------------------------------------- */

const fila = document.querySelector('.contenedor-carrusel');
const card = document.querySelectorAll('.card');

const flechaizquierda = document.getElementById('arrow-left');
const flechaderecha = document.getElementById('arrow-right');

flechaderecha.addEventListener('click', (e) => {
  e.preventDefault();
  fila.scrollLeft += fila.offsetWidth;
})

flechaizquierda.addEventListener('click', (e) => {
  e.preventDefault();
  fila.scrollLeft -= fila.offsetWidth;
})

/*-------------------------PAGINACIÓN MENTORES------------------------------------------ */
const numeroPaginas = Math.ceil(card.length / 5);

for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement('button');

  /* if( i === 0) {
    indicador.classList.add('activo')
  } */

  document.querySelector('.indicadores').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila.scrollLeft = i * fila.offsetWidth;
  })

}

/*-------------------------PAGINACIÓN SPONSORS------------------------------------------ */

const fila2 = document.querySelector('.contenedor-carrusel2');
const sponsors = document.querySelectorAll('.sponsor-img');

const numeroSponsors = Math.ceil(sponsors.length / 5);

for (let i = 0; i < numeroSponsors; i++) {
  const indicador = document.createElement('button');

  document.querySelector('.indicadores2').appendChild(indicador);
  indicador.addEventListener('click', (e) => {
    fila2.scrollLeft = i * fila2.offsetWidth;
  })

}

/*-------------------------PREGUNTAS---------------------------------------------------- */

const question_card = document.querySelectorAll('.question-card');
const question_body = document.querySelectorAll('.question-body');
const btn_all_questions = document.getElementById("all-questions")

let state = true;
let state2 = true;

question_card.forEach(item => {
  item.querySelector('.arrow-down').addEventListener('click', () => {
    if (state === true) {
      item.querySelector('.question-body').classList.add("active", "animate__animated", "animate__fadeInDown", "animate__faster");
      state = false;
    } else {
      item.querySelector('.question-body').classList.remove("active", "animate__animated", "animate__fadeInDown", "animate__faster");
      state = true;
    }
  })
})

btn_all_questions.addEventListener('click', (e) => {
  e.preventDefault();

  if (state2 === true) {
    question_body.forEach(item => {
      item.classList.add("active")
      btn_all_questions.innerText = 'Ocultar todas las preguntas';
      state2 = false;
    })
  } else {
    question_body.forEach(item => {
      item.classList.remove("active")
      btn_all_questions.innerText = 'Ver todas las preguntas';
      state2 = true;
    })
  }
})

