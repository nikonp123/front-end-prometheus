const movies = [{
  title: 'Думки мої тихі',
  image: 'https://i.ibb.co/35ZKPNZ/image.jpg',
  description: 'Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем.',
  date: '2020-01-16T00:00:00',
  director: 'Антоніо Лукіч',
  duration: '1год 54хв'
}, {
  title: 'Додому',
  image: 'https://i.ibb.co/9gN9dvj/Evge-poster.jpg',
  description: '«Додому» — український драматичний фільм 2019 року, повнометражний режисерський дебют Нарімана Алієва з Ахтемом Сеітаблаєвим у головній ролі.',
  date: '2019-07-14T00:00:00',
  director: 'Володимир Яценко',
  duration: '1год 36хв'
}];

// <article class="card">
//   <header class="card__header">
//     <h2 class="card__title">Думки мої тихі</h2>
//     <span class="card__info">2019 - 1 год 34 хв</span>
//   </header>
//   <section class="card__content">
//     <p class="card__description">Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем. Помічником у цій роботі стає його мама. Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем. Помічником у цій роботі стає його мама.</p>
//     <hr>
//     <p>Режисер: Антоніо Лукіч</p>
//   </section>
// </article>

function createContent(movie) {
  // card
  const article = document.createElement('article');
  article.classList.add('card');

  // header
  const header = document.createElement('header');
  header.classList.add('card__header');
  header.style.backgroundImage = `url(${movie.image})`;

  const h2 = document.createElement('H2');
  h2.classList.add('card__title');
  h2.textContent = movie.title;

  const info = document.createElement('span');
  info.classList.add('card__info');
  info.textContent = `${movie.date} - ${movie.duration}`;

  header.appendChild(h2);
  header.appendChild(info);

  // section
  const section = document.createElement('section');
  section.classList.add('card__content');

  const description = document.createElement('p');
  description.classList.add('card__description');
  description.textContent = movie.description;

  const line = document.createElement('hr');

  const director = document.createElement('p');
  director.textContent = movie.director;

  section.appendChild(description);
  section.appendChild(line);
  section.appendChild(director);

  article.appendChild(header);
  article.appendChild(section);

  return article;
}

function appendContent(content) {
  const el = document.getElementById('content');

  el.appendChild(content);
}

function init(movies) {
  const fragment = document.createDocumentFragment();

  movies.forEach((movie) => {
    fragment.appendChild(createContent(movie));
  });

  appendContent(fragment);
}

init(movies);