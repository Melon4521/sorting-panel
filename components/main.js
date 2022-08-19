import myJson from '../api/demoDataTires.json' assert {
    type: 'json'
};

import selectGenerate from './sorting-panel/selects/select-generate/script.js';
import createAndSettingCards from "./cards/script.js";
import sortingEvents from './sorting-panel/sorting/script.js';
import reset from './sorting-panel/selects/reset.js';
import cartMainFunction from './shopping-cart/script.js';

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
easydropdown.all();

//</Sorting>==============================================================================

//<Cards>==============================================================================

createAndSettingCards(myJson);

//</Cards>==============================================================================

//<Shopping cart>==============================================================================

cartMainFunction()

//</Shopping cart>==============================================================================