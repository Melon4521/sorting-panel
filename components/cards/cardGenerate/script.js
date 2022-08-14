export default function cardGenerate(myJson) {
    let PlaceGeneration = document.getElementById('Right')

    PlaceGeneration.innerHTML = '';

    for (let i = 0; i < myJson.tires.length + 1; i++) {
        PlaceGeneration.innerHTML += /*html*/ `
            <div class="catalog__cards-card catalog-card" id="Card" name="${myJson.tires[i].name}" price="${myJson.tires[i].price}" season="${myJson.tires[i].season}" brand="${myJson.tires[i].brand}" stok="${myJson.tires[i].stock}">
                <div class="catalog-card__media-title"></div>
                <div class="catalog-card__body">
                    <div class="catalog-card__image">
                        <img src="https://tyreopt.ru/trade/images/tyres/category/aosen/aosen-hu901.jpg">
                    </div>
                    <div class="catalog-card__info card-info">
                        <div class="card-info__title"><a>${myJson.tires[i].name}</a></div>
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