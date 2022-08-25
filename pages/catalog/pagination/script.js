export default function pagenInit(myJson, arrAll, e) {
    let thisPage = Number(document.getElementById('pagenPage').children[0].textContent);

    if (e) {
        if (e.target.classList.contains('catalog-pagen__prev')) {
            document.getElementById('pagenPage').children[0].innerHTML = `${thisPage - 1}`;
        } else if (e.target.classList.contains('catalog-pagen__next')) {
            document.getElementById('pagenPage').children[0].innerHTML = `${thisPage + 1}`;
        }
    };

    if (Number(document.getElementById('pagenPage').children[0].textContent) == 1) {
        document.getElementById('pagenPrev').style.pointerEvents = 'none';
    } else if (Number(document.getElementById('pagenPage').children[0].textContent) == Number(document.getElementById('pagenPage').children[1].textContent)) {
        document.getElementById('pagenNext').style.pointerEvents = 'none';
    } else {
        document.getElementById('pagenPrev').style.pointerEvents = 'all';
        document.getElementById('pagenNext').style.pointerEvents = 'all';
    };

    const count = 10; // Число карточек на странице
    let Right = document.getElementById('Right'); // Место вывода карточек

    Right.innerHTML = ``; // Очищение от старых карточек

    let page = +(document.getElementById('pagenPage').children[0].textContent); // Узнаём номер страницы

    for (let i = (page - 1) * count; i < page * count; i++) { // От и до какой карточки выводим

        if ((Right.children.length == count) || (i > arrAll.length - 1)) { // Условия при которых больше не выводим карточки
            break;
        };

        // console.log(`Номер карточки в правом блоке '${i}' - номер карточки по факту в json '${arrAll[i]}'`); // Номер карточки : номер по массиву

        let image;

        if (myJson.tires[`${arrAll[i]}`].image500x500) { // Выдача картинки если её нет
            image = myJson.tires[`${arrAll[i]}`].image500x500;
        } else {
            image = "images/no-image.png";
        };

        Right.innerHTML += /*html*/ `
            <div class="catalog__cards-card catalog-card" name="${myJson.tires[`${arrAll[i]}`].name}" price="${myJson.tires[`${arrAll[i]}`].price}" stok="${myJson.tires[`${arrAll[i]}`].stock}" data-brand='${myJson.tires[`${arrAll[i]}`].brand}' data-ship='${myJson.tires[`${arrAll[i]}`].ship}' data-date_up='${myJson.tires[`${arrAll[i]}`].date_up}' data-season='${myJson.tires[`${arrAll[i]}`].season}' data-w='${myJson.tires[`${arrAll[i]}`].w}' data-h='${myJson.tires[`${arrAll[i]}`].h}' data-r='${myJson.tires[`${arrAll[i]}`].r}'>
                <div class="catalog-card__media-title"></div>
                <div class="catalog-card__body">
                    <div class="catalog-card__image">
                        <img src="${image}">
                    </div>
                    <div class="catalog-card__info card-info">
                        <div class="card-info__title"><a href="#">${myJson.tires[`${arrAll[i]}`].name}</a></div>
                        <div class="card-info__price">
                            <span>${+(myJson.tires[`${arrAll[i]}`].price)}</span> руб./шт.
                        </div>
                        <div class='catalog-card__dop card-dop CardDopInfo'>
                            <div class="card-dop__item">
                                Сезон:
                                <span>${myJson.tires[i].season}</span>
                            </div>
                            <div class="card-dop__item">
                                В наличии:
                                <span>${+(myJson.tires[`${arrAll[i]}`].stock)}</span>
                                шт.
                            </div>
                            <div class="card-dop__item">
                                Производитель:
                                <span>${myJson.tires[`${arrAll[i]}`].brand}</span>
                            </div>
                        </div>
                        <div class="card-info__buttons CardButtonAll">
                            <button class="card-info__button buyIn1Click" 
                                data-name="${myJson.tires[`${arrAll[i]}`].name}" 
                                data-price="${myJson.tires[`${arrAll[i]}`].price}" 
                                data-stock="${myJson.tires[`${arrAll[i]}`].stock}"
                                data-date_up="${myJson.tires[`${arrAll[i]}`].date_up}" 
                                data-season="${myJson.tires[`${arrAll[i]}`].season}"
                                data-image="${myJson.tires[`${arrAll[i]}`].image500x500}"
                                data-card_id="${myJson.tires[`${arrAll[i]}`].code}">
                                Купить в 1 клик
                            </button>
                            <button class="card-info__button addToCart" 
                                data-name="${myJson.tires[`${arrAll[i]}`].name}" 
                                data-price="${myJson.tires[`${arrAll[i]}`].price}" 
                                data-stock="${myJson.tires[`${arrAll[i]}`].stock}"
                                data-date_up="${myJson.tires[`${arrAll[i]}`].date_up}" 
                                data-season="${myJson.tires[`${arrAll[i]}`].season}"
                                data-image="${myJson.tires[`${arrAll[i]}`].image500x500}"
                                data-card_id="${myJson.tires[`${arrAll[i]}`].code}">
                                В корзину
                            </button>
                        </div>
                    </div>
                </div>
                <div class="catalog-card__media-buttons"></div>
            </div>
        `;
    };
};