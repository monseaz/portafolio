// Obtener todos los elementos con la clase 'typewriter'
let typewriterElements = document.querySelectorAll('.typewriter');

// Textos para cada elemento
let texts = [
  'Desarrollo sitios web',
  'Proyectos que he creado recientemente...',
  'Algunos testimonios de compañerxs'
];

// Iterar sobre cada elemento y aplicar el efecto Typewriter con su texto respectivo
typewriterElements.forEach((element, index) => {
  let typewriter = new Typewriter(element, {
    loop: true,
    delay: 100,
  });

  typewriter
    .pauseFor(2500)
    .typeString(`<span style="color: #7b2cbf;">${texts[index]}</span>`)
    .pauseFor(200)
    .deleteChars(texts[index].length)
    .start();
});

