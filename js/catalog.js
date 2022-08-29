async function json() {

    //// Поиск JSON файла 
    let fileUrl = '../api/demoDataTiresFull.json';
    let response = await fetch(fileUrl);
    let DB = await response.json();

    return DB;
};

let myJson = await json();

console.log(myJson);

// async function test() {
//     let test = await myJson ;
//     console.log(test);
// }

// test();
// test();
// test();
// test();
// test();
// test();
// test();


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
    arrAll = reset(myJson, arrAll)
    pagenInit(myJson, arrAll);
    cartInit()
});

document.getElementById('LeftPick').addEventListener('click', () => {
    arrAll = sortingEvents(myJson, page);
    pagenInit(myJson, arrAll);
    cartInit()
});

document.getElementById('pagen').addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog-pagen__prev')) {
        pagenInit(myJson, arrAll, e);
    } else if (e.target.classList.contains('catalog-pagen__next')) {
        pagenInit(myJson, arrAll, e);
    };
    cartInit()
});
//<Shopping cart>==============================================================================

cartInit()
//</Shopping cart>==============================================================================