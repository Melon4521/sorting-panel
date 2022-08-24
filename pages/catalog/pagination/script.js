import settingCards from '../cards/script.js';

export default function pagenInit(myJson) {
    const step = 10,
        pagenPrev = document.querySelector('#pagenPrev'),
        pagenNext = document.querySelector('#pagenNext');
    let start = 0,
        end = step;
    let pass = 0; // количество пропускаемых карточек

    pagenPrev.addEventListener('click', pagenPrevCards);
    pagenNext.addEventListener('click', pagenNextCards);

    newCardGenerate(myJson, start, end);

    //<Functions>==============================================================================

    function newCardGenerate(myJson, start, end) {
        let PlaceGeneration = document.getElementById('Right');

        PlaceGeneration.innerHTML = '';

        let page = end / step;
        document.getElementById('numberPage').innerHTML = `${page}`;

        if (Number(page) == 1) {
            pagenPrev.classList.add('catalog-pagen__prev__disable');
        } else {
            pagenPrev.classList.remove('catalog-pagen__prev__disable');
        };

        for (let i = start + pass; i < end + pass; i++) {

            let image;

            if (i > myJson.tires.length - 1) {
                break;
            };

            if (myJson.tires[i].image500x500) {
                image = myJson.tires[i].image500x500;
            } else {
                image = "images/no-image.png";
            };

            PlaceGeneration.innerHTML += /*html*/ `
                <div class="catalog__cards-card catalog-card" id="Card" name="${myJson.tires[i].name}" price="${myJson.tires[i].price}" stok="${myJson.tires[i].stock}" data-brand='${myJson.tires[i].brand}' data-ship='${myJson.tires[i].ship}' data-date_up='${myJson.tires[i].date_up}' data-season='${myJson.tires[i].season}' data-w='${myJson.tires[i].w}' data-h='${myJson.tires[i].h}' data-r='${myJson.tires[i].r}'>
                    <div class="catalog-card__media-title"></div>
                    <div class="catalog-card__body">
                        <div class="catalog-card__image">
                            <img src="${image}">
                        </div>
                        <div class="catalog-card__info card-info">
                            <div class="card-info__title"><a href="#">${myJson.tires[i].name}</a></div>
                            <div class="card-info__price">
                                <span>${Number(myJson.tires[i].price)}</span> руб./шт.
                            </div>
                            <div class='catalog-card__dop card-dop CardDopInfo'>
                                <div class="card-dop__item">
                                    Сезон:
                                    <span>${myJson.tires[i].season}</span>
                                </div>
                                <div class="card-dop__item">
                                    В наличии:
                                    <span>${Number(myJson.tires[i].stock)}</span>
                                    шт.
                                </div>
                                <div class="card-dop__item">
                                    Производитель:
                                    <span>${myJson.tires[i].brand}</span>
                                </div>
                            </div>
                            <div class="card-info__buttons CardButtonAll">
                                <button class="card-info__button buyIn1Click" 
                                    data-name="${myJson.tires[i].name}" 
                                    data-price="${myJson.tires[i].price}" 
                                    data-stock="${myJson.tires[i].stock}"
                                    data-date_up="${myJson.tires[i].date_up}" 
                                    data-season="${myJson.tires[i].season}"
                                    data-image="${myJson.tires[i].image500x500}"
                                    data-card_id="${myJson.tires[i].code}">
                                    Купить в 1 клик
                                </button>
                                <button class="card-info__button addToCart" 
                                    data-name="${myJson.tires[i].name}" 
                                    data-price="${myJson.tires[i].price}" 
                                    data-stock="${myJson.tires[i].stock}"
                                    data-date_up="${myJson.tires[i].date_up}" 
                                    data-season="${myJson.tires[i].season}"
                                    data-image="${myJson.tires[i].image500x500}"
                                    data-card_id="${myJson.tires[i].code}">
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="catalog-card__media-buttons"></div>
                </div>
            `;
        };

        if (PlaceGeneration.children.length != step){
            pagenNext.classList.add('catalog-pagen__prev__disable');
        } else {
            if (pagenPrev.classList.contains('catalog-pagen__prev__disable')) {
                pagenPrev.classList.remove('catalog-pagen__prev__disable');
            };
        };
    };

    function pagenPrevCards() {
        let startPosition;
        let endPosition;

        if (start == 0) {

        } else {
            end = start;
            start -= step;
            startPosition = start;
            endPosition = end;
            newCardGenerate(myJson, startPosition, endPosition);
            settingCards();
            scrollToPosition(0);
        };
    };

    function pagenNextCards() {
        let startPosition;
        let endPosition;

        if (end >= myJson.tires.length) {

        } else {
            start = end;
            end += step;
            startPosition = start;
            endPosition = end;

            newCardGenerate(myJson, startPosition, endPosition);
            settingCards()
            scrollToPosition(0);
        };
    };

    //</Functions>==============================================================================
};