import myJson from '../api/demoDataTires.json' assert {
    type: 'json'
};


import selectGenerate from './sorting-panel/selects/select-generate/script.js';
import createAndSettingCards from "./cards/script.js";
import sortingEvents from './sorting-panel/sorting/script.js';


document.getElementById('LeftPick').addEventListener('click', function () {
    sortingEvents();
});

document.getElementById('Reset').addEventListener('click', console.clear);

selectGenerate(myJson);
createAndSettingCards(myJson);