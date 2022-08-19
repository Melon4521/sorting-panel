export default function cartMainFunction() {
    let addToCartButtons = document.querySelectorAll('.addToCart');
    const shoppingCart = document.querySelector('#shoppingCart');

    addToCartButtons.forEach(addToCartButton => {
        addToCartButton.addEventListener('click', (event) => {
            add2Cart(event);
        });
    });

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
            id: targetButton.dataset.id,
        },
        cartData = getCartData() || {};

        if (cartData.hasOwnProperty(cardDataAtributes.id)) {
            cartData[id][cartData[id].length-1]++;
        } else {
            cartData[id] = [cardDataAtributes.cardName,
                cardDataAtributes.price,
                cardDataAtributes.season,
                cardDataAtributes.dateUp,
                cardDataAtributes.stock,
                cardDataAtributes.cardImage, 1];
        };

        setCartData(cartData);

        // Проверка на наличие карточек в корзине
        // if (document.querySelectorAll('.cart-card').length < 1) {
        //     shoppingCart.innerHTML = '';
        // }

        // generateCartCard(cardDataAtributes);
    };

    function generateCartCard(cardAtrs) {
        let PlaceGeneration = shoppingCart, image;

        if (cardAtrs.cardImage) {
            image = cardAtrs.cardImage;
        } else {
            image = "images/no-image.png";
        };

        PlaceGeneration.innerHTML += /*html*/ 
        `<div class="cart-cards__item cart-card">
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
                        <div class="info-footer__cart-left"><span>В корзине: </span>2</div>
                        <div class="info-footer__func-btns">
                            <div class="info-footer__func-btn">Добавить</div>
                            <div class="info-footer__func-btn">Убрать</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    };

    function setCartData(cartData) {
        localStorage.setItem("cart", JSON.stringify(cartData));
    };

    function getCartData() {
        return JSON.parse(localStorage.getItem("shopping-cart"));
    }

    //</Functions>==============================================================================
};