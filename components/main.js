import myJson from '../api/demoDataTires.json' assert { type: 'json' };

import selectGenerate from './sorting-panel/selectGenerate/script.js';
import cardGenerate from "./cards/cardGenerate/script.js";
import sortingEvents from './sorting-panel/events/script.js';


document.getElementById('LeftPick').addEventListener('click', function () {
    sortingEvents()
});

selectGenerate(myJson);
cardGenerate(myJson);