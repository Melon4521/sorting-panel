import myJson from '../api/demoDataTires.json' assert {
    type: 'json'
};

import selectGenerate from './sorting-panel/selects/select-generate/script.js';
import createAndSettingCards from "./cards/script.js";
import sortingEvents from './sorting-panel/sorting/script.js';
import reset from './sorting-panel/selects/reset.js';

//<Sorting>==============================================================================

document.getElementById("MenuPriceRange").addEventListener("input", function () {
    let inputRangeValue = document.getElementById('MaxPriceCard')
    inputRangeValue.innerHTML = `${this.value}`;
});

document.getElementById('LeftPick').addEventListener('click', function () {
    sortingEvents();
});

document.getElementById('Reset').addEventListener('click', reset);

selectGenerate(myJson);

//</Sorting>==============================================================================

//<Cards>==============================================================================

createAndSettingCards(myJson);

//</Cards>==============================================================================

easydropdown.all();