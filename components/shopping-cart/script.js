export default function cartMainFunction() {
    let addToCartButtons = document.querySelectorAll('.addToCart'),
        cartIcon = document.querySelector('.top-menu__cart');
    const shoppingCart = document.querySelector('#shoppingCart');

    addToCartButtons.forEach(addToCartButton => {
        addToCartButton.addEventListener('click', (event) => {
            add2Cart(event);
        });
    });

    cartIcon.addEventListener('click', cartOpen);

    //<Functions>==============================================================================

    function add2Cart(e) {
        let targetButton = e.target,
            cardDataAtributes = {
                cardName: targetButton.dataset.name,
                price: targetButton.dataset.price,
                season: targetButton.dataset.season,
                dateUp: targetButton.dataset.date_up,
                stock: targetButton.dataset.stock,
                cardImage: targetButton.dataset.image,
                cardId: targetButton.dataset.card_id || '0',
            },
            cartData = getCartData() || {},
            cardID = cardDataAtributes.cardId;

        if (cartData.hasOwnProperty(cardID)) {
            // Если товар уже есть в корзине, то прибавляем его кол-во
            cartData[cardID][cartData[cardID].length - 1]++;
        } else {
            // Иначе создаем новый товар
            cartData[cardID] = [
                cardDataAtributes.cardName,
                cardDataAtributes.price,
                cardDataAtributes.season,
                cardDataAtributes.dateUp,
                cardDataAtributes.stock,
                cardDataAtributes.cardImage,
                cardID,
                1,
            ];
        };

        setCartData(cartData);

        // generateCartCard(cardDataAtributes);
    };

    function generateCartCard(cardAtrs) {
        let PlaceGeneration = shoppingCart,
            cartData = getCartData(),
            image;

        if (cardAtrs.cardImage) {
            image = cardAtrs.cardImage;
        } else {
            image = "images/no-image.png";
        };

        if (cartData !== null) {
            PlaceGeneration.innerHTML = '';
        };

        if (cardAtrs.total == 1) {
            PlaceGeneration.innerHTML += /*html*/
            `<div class="cart-cards__item cart-card" data-id="${cardAtrs.cardId}">
                <div class="cart-card__body">
                    <div class="cart-card__image">
                        <img src="${image}" alt="Изображение">
                    </div>
                    <div class="cart-card__info">
                        <div class="cart-card__info-header info-header">
                            <div class="info-header__title">
                                <a href="#">${cardAtrs.cardName}</a>
                            </div>
                            <div class="info-header__price">${cardAtrs.price}руб/шт.</div>
                            <div class="info-header__details"><span>Сезон: </span>${cardAtrs.season}</div>
                            <div class="info-header__details"><span>Дата производства: </span>${cardAtrs.dateUp}</div>
                            <div class="info-header__details"><span>В наличии: </span>${cardAtrs.stock}</div>
                        </div>
                        <div class="cart-card__info-footer info-footer">
                            <div class="info-footer__cart-left"><span>В корзине: </span>1</div>
                            <div class="info-footer__func-btns">
                                <div class="info-footer__func-btn">Добавить</div>
                                <div class="info-footer__func-btn">Убрать</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        } else {
            let currentCards = PlaceGeneration.querySelectorAll('.cart-card');
            currentCards.forEach(currentCard => {
                currentCard.querySelector('.info-footer__cart-left').innerHTML = `<span>В корзине: </span>${cardAtrs.total}`
            });
        };
    };

    function setCartData(cartData) {
        localStorage.setItem("shopping-cart", JSON.stringify(cartData));
    };

    function getCartData() {
        return JSON.parse(localStorage.getItem("shopping-cart"));
    };

    function cartOpen() {
        let cartData = getCartData(),
            totalCartSum = 0, // Сумма всех товаров в корзине
            cartInfo = ''; // Текст заказа для письма

        if (cartData !== null) {
            for (let item in cartData) {
                let cartDataAtrs = {
                    cardName: cartData[item][0],
                    price: cartData[item][1],
                    season: cartData[item][2],
                    dateUp: cartData[item][3],
                    stock: cartData[item][4],
                    cardImage: cartData[item][5],
                    cardId: cartData[item][6],
                    total: cartData[item][7],
                };
                generateCartCard(cartDataAtrs);
            }
        }
    };

    //</Functions>==============================================================================
};