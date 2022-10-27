import {createContentTemplate} from "./card.js"
import {getMovies} from "./service.js"
import * as helpers from "./helpers.js"
import {createSorting} from "./sorting.js"



// const movies = [{
//     title: 'Думки мої тихі',
//     image: 'https://i.ibb.co/35ZKPNZ/image.jpg',
//     description: 'Молодий звукорежисер Вадим отримує замовлення – записати голоси закарпатських тварин. Це може стати його шансом назавжди залишити "незручну Україну" і переїхати до Канади, подалі від проблем.',
//     date: '2020-01-16T00:00:00',
//     director: 'Антоніо Лукіч',
//     duration: '1год 54хв'
//   }, {
//     title: 'Додому',
//     image: 'https://i.ibb.co/9gN9dvj/Evge-poster.jpg',
//     description: '«Додому» — український драматичний фільм 2019 року, повнометражний режисерський дебют Нарімана Алієва з Ахтемом Сеітаблаєвим у головній ролі.',
//     date: '2019-07-14T00:00:00',
//     director: 'Володимир Яценко',
//     duration: '1год 36хв'
//   }];

// const { response } = require("express");


function initTemplate() {

  helpers.appendContent('sort', createSorting());

  getMovies()
    .then((data) => {
      const fragment = document.createDocumentFragment();
      data.forEach((movie) => {
        fragment.appendChild(createContentTemplate(movie));
      });

      helpers.appendContent('content', fragment);
    });

};

initTemplate();



