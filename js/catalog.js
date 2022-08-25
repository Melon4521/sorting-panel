import myJson from '../api/demoDataTiresFull.json'assert {
    type: 'json'
};

import selectGenerate from '../pages/catalog/sorting-panel/selects/select-generate/script.js';
import settingCards from "../pages/catalog/cards/script.js";
import sortingEvents from '../pages/catalog/sorting-panel/sorting/script.js';
import reset from '../pages/catalog/sorting-panel/selects/reset.js';
import cartInit from './shopping-cart.js';
import pagenInit from '../pages/catalog/pagination/script.js';

//<Sorting>==============================================================================

document.getElementById("MenuPriceRange").addEventListener("input", function () {
    let inputRangeValue = document.getElementById('MaxPriceCard')
    inputRangeValue.innerHTML = `${this.value}`;
});

selectGenerate(myJson);
easydropdown.all();

//</Sorting>==============================================================================

//<Cards>==============================================================================

settingCards();

//</Cards>==============================================================================

let page = +(document.getElementById('pagenPage').children[0].textContent),
    arrAll = [];

arrAll = sortingEvents(myJson, page, arrAll);
pagenInit(myJson, arrAll);

document.getElementById('Reset').addEventListener('click', () => {
    reset()
});

document.getElementById('LeftPick').addEventListener('click', () => {
    arrAll = sortingEvents(myJson, page);
    pagenInit(myJson, arrAll);
});

document.getElementById('pagen').addEventListener('click', (e) => {
    pagenInit(myJson, arrAll,e);
});
//<Shopping cart>==============================================================================

cartInit()
//</Shopping cart>==============================================================================