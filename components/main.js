import myJson from '../api/demoDataTires.json' assert {
    type: 'json'
};

import selectGenerate from './sorting-panel/selectGenerate/script.js';
import cardGenerate from "./cards/cardGenerate/script.js";
import sortingEvents from './sorting-panel/events/script.js';


let cardButtons = document.querySelectorAll('.card-info__buttons'),
    cardTitles = document.querySelectorAll('.card-info__title');


document.getElementById('LeftPick').addEventListener('click', function () {
    sortingEvents();
});

document.getElementById('Reset').addEventListener('click', console.clear);

selectGenerate(myJson);
cardGenerate(myJson);