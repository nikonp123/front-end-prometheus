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

//   <article class="card">
//   <header class="card__header">
//       <h2 class="card__title">Думки мої тихі</h2>
//       <span class="card__info">2019 - 1hr 34min</span>
//   </header>
//   <section class="card__content">
//       <p class="card__description">Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем. Помічником у цій роботі стає його мама.Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем. Помічником у цій роботі стає його мама.</p>
//       <hr>
//       <p>Режисер: Антоніо Лукіч</p>
//   </section>
// </article>


//clean JS
// first path
// function createContent(movie) {
//     //card
//     const article = document.createElement('article');
//     article.classList.add('card');

//     const header = document.createElement('header');
//     header.classList.add('card__header');
//     header.style.backgroundImage = `url(${movie.image})`;

//     const h2 = document.createElement('H2');
//     h2.classList.add('card__title');
//     h2.textContent = movie.title;

//     const info = document.createElement('span');
//     info.classList.add('card__info');
//     info.textContent = `${movie.date} - ${movie.duration}`;

//     header.appendChild(h2);
//     header.appendChild(info);

//     //section
//     const section = document.createElement('section');
//     article.classList.add('card__content');

//     const description = document.createElement('p');
//     description.classList.add('card__description');
//     description.textContent = `${movie.description}`;

//     const line = document.createElement('hr');

//     const director = document.createElement('p');
//     director.textContent = `${movie.director}`;

//     section.appendChild(description);
//     section.appendChild(line);
//     section.appendChild(director);

//     article.appendChild(header);
//     article.appendChild(section);

//     return article;
// };

// function appendContent(content) {
//     const main = document.getElementById('content');
//     main.appendChild(content);    
// };

// function init(movies) {
//     console.log('first path');
//     const fragment = document.createDocumentFragment();  
    
//     movies.forEach((movie) => {
//         fragment.appendChild(createContent(movie));
//     });

//     appendContent(fragment);

// };

// // init(movies);


// //Second path
// function createContentTemplate(movie) {
//     const article = `
//       <article class="card">
//       <header class="card__header" style="background-image: url(${movie.image})">
//           <h2 class="card__title">${movie.title}</h2>
//           <span class="card__info">${movie.date} - ${movie.duration}</span>
//       </header>
//       <section class="card__content">
//           <p class="card__description">${movie.description}</p>
//           <hr>
//           <p>${movie.director}</p>
//       </section>
//     </article>    
//     `;    

//     return createContentFragment(article);

// };

// function createContentFragment(str) {
//     const template = document.createElement('template');
    
//     template.innerHTML = str;

//     return template.content;
    
// };

// function initTemplate(movies) {
//     console.log('second path');
//     const fragment = document.createDocumentFragment();  
//     movies.forEach((movie) => {
//         fragment.appendChild(createContentTemplate(movie));
//     });

//     appendContent(fragment);

// };


// initTemplate(movies);

// classes
class Movie {
    constructor(movie) {
        this.title=movie.title;
        this.image=movie.image;
        this.description=movie.description;
        this.date= new Date(movie.date).getFullYear();
        this.director=movie.director;
        this.duration=movie.duration;
    }

    createContent() {
        //card
        const article = document.createElement('article');
        article.classList.add('card');

        const header = document.createElement('header');
        header.classList.add('card__header');
        header.style.backgroundImage = `url(${this.image})`;

        const h2 = document.createElement('H2');
        h2.classList.add('card__title');
        h2.textContent = this.title;

        const info = document.createElement('span');
        info.classList.add('card__info');
        info.textContent = `${this.date} - ${this.duration}`;

        header.appendChild(h2);
        header.appendChild(info);

        //section
        const section = document.createElement('section');
        article.classList.add('card__content');

        const description = document.createElement('p');
        description.classList.add('card__description');
        description.textContent = `${this.description}`;

        const line = document.createElement('hr');

        const director = document.createElement('p');
        director.textContent = `${this.director}`;

        section.appendChild(description);
        section.appendChild(line);
        section.appendChild(director);

        article.appendChild(header);
        article.appendChild(section);


        return article;
    }
};

class App {
    static RenderAll(movies) {
        const el = document.getElementById('content');
        const fragment = document.createDocumentFragment();

        movies.forEach((m) => {
            const frag=new Movie(m).createContent();
            // console.log(frag);
            fragment.appendChild(frag);
        });

        el.appendChild(fragment);

    }
};

App.RenderAll(movies);