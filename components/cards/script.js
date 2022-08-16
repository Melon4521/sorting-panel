let cardGenerate = (myJson) => {
    let PlaceGeneration = document.getElementById('Right')

    PlaceGeneration.innerHTML = '';

    for (let i = 0; i < myJson.tires.length; i++) {

        let image;

        if (myJson.tires[i].image500x500 == "") {
            image = "images/no-image.png";
        } else {
            image = myJson.tires[i].image500x500;
        }

        PlaceGeneration.innerHTML += /*html*/ `
            <div class="catalog__cards-card catalog-card" id="Card" name="${myJson.tires[i].name}" price="${myJson.tires[i].price}" season="${myJson.tires[i].season}" brand="${myJson.tires[i].brand}" stok="${myJson.tires[i].stock}">
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
                            <button class="card-info__button" id="BuyIn1Click">Купить в 1 клик</button>
                            <button class="card-info__button" id="AddTocard">В корзину</button>
                        </div>
                    </div>
                </div>
                <div class="catalog-card__media-buttons"></div>
            </div>
        `;
    };
};

let cardsDynamicAdaptive = () => {
    let cardButtons = document.querySelectorAll('.card-info__buttons'),
        cardTitles = document.querySelectorAll('.card-info__title');

    function doDynamicAvButtons() {
        cardButtons.forEach(cardButton => {
            let cardInfo = cardButton.closest('.catalog-card__info');
            let cardInfoBody = cardInfo.closest('.catalog-card__body');
            let cardButtonsNewParent = cardInfoBody.nextElementSibling;
            cardButton.remove(cardInfo);
            cardButtonsNewParent.append(cardButton);
        });
    };

    function doDynamicAvTitles() {
        cardTitles.forEach(cardTitle => {
            let cardInfo = cardTitle.closest('.catalog-card__info');
            let cardInfoBody = cardInfo.closest('.catalog-card__body');
            let cardInfoBodyParent = cardInfoBody.parentElement;
            let cardTitlesNewParent = cardInfoBodyParent.querySelector('.catalog-card__media-title');
            cardTitle.remove(cardInfo);
            cardTitlesNewParent.append(cardTitle);
        });
    };

    doDynamicAvButtons();
    doDynamicAvTitles();
};

export default function createAndSettingCards(myJson) {
    cardGenerate(myJson)

    if (window.innerWidth <= 600) {
        cardsDynamicAdaptive();
    };
};