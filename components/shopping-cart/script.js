export default function cartMainFunction() {
    let addToCartButtons = document.querySelectorAll('.addToCart');
    const shoppingCart = document.querySelector('#shoppingCart'),
        cartIcon = document.querySelector('.top-menu__cart'),
        clearAllButton = document.querySelector('#cartClearAll');

    addToCartButtons.forEach(addToCartButton => {
        addToCartButton.addEventListener('click', (event) => {
            add2Cart(event);
        });
    });

    cartIcon.addEventListener('click', cartOpen);
    clearAllButton.addEventListener('click', clearAllItems);

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
            image;

        if (cardAtrs.cardImage) {
            image = cardAtrs.cardImage;
        } else {
            image = "images/no-image.png";
        };

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
                            <div class="info-footer__cart-left"><span>В корзине: </span>${cardAtrs.total}</div>
                            <div class="info-footer__func-btns">
                                <button class="info-footer__func-btn addCartItem" data-id="${cardAtrs.cardId}">Добавить</button>
                                <button class="info-footer__func-btn delCartItem" data-id="${cardAtrs.cardId}">Убрать</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        let addItemButtons = PlaceGeneration.querySelectorAll('.addCartItem');
        let delItemButtons = PlaceGeneration.querySelectorAll('.delCartItem');

        addItemButtons.forEach(addItemButton => {
            addItemButton.addEventListener('click', (e) => {
                addItem(e);
            });
        });

        delItemButtons.forEach(delItemButton => {
            delItemButton.addEventListener('click', (e) => {
                deleteItem(e);
            });
        });
    };

    function setCartData(cartData) {
        localStorage.setItem("shopping-cart", JSON.stringify(cartData));
    };

    function getCartData() {
        return JSON.parse(localStorage.getItem("shopping-cart"));
    };

    function cartOpen() {
        let cartData = getCartData(),
            PlaceGeneration = shoppingCart,
            totalCartSum = 0, // Сумма всех товаров в корзине
            cartInfo = ''; // Текст заказа для письма

        if (cartData !== null) {
            PlaceGeneration.innerHTML = '';

            // Пробегаемся по всем ключам в LocalStorage
            for (let items in cartData) {

                // Забираем значения в объект
                let cartDataAtrs = {
                    cardName: cartData[items][0],
                    price: cartData[items][1],
                    season: cartData[items][2],
                    dateUp: cartData[items][3],
                    stock: cartData[items][4],
                    cardImage: cartData[items][5],
                    cardId: cartData[items][6],
                    total: cartData[items][7],
                };

                for (let i = 0; i < cartData[items].length; i++) {
                    cartInfo += `${cartData[items][i]}\t`;
                };

                cartInfo += "\n\n";
                totalCartSum += Number(String((cartData[items][1])) * cartData[items][7]);
                generateCartCard(cartDataAtrs);
            }

            document.getElementById("totalCartSum").innerHTML = `${totalCartSum} руб.`;
            return totalCartSum;
        }
    };

    function clearAllItems() {
        if (confirm("Вы точно хотите очистить всё?")) {
            localStorage.removeItem("shopping-cart");
            shoppingCart.innerHTML = '';
            shoppingCart.innerHTML = /*html*/
                `<div class="cart-cards__empty">
                    <p class="cart-cards__empty-text">Корзина пуста...</p>
                </div>`;
        };
    };

    function addItem(event) {
        let targetElement = event.target,
            targetElementId = targetElement.dataset.id,
            cartData = getCartData();

        for (let item in cartData) {

            if (cartData[item][6] == targetElementId) {
                cartData[item][7]++;
                break
            }
        }

        setCartData(cartData);
        cartOpen();
    };

    function deleteItem(event) {
        let targetElement = event.target,
            targetElementId = targetElement.dataset.id,
            cartData = getCartData();

        for (let item in cartData) {

            if (cartData[item][6] == targetElementId) {

                if (cartData[item][7] == 1) {
                    delete cartData[item];
                } else {
                    cartData[item][7]--;
                }

                break
            }
        }

        setCartData(cartData);
        cartOpen();

        if (cartOpen() === 0) {
            localStorage.removeItem("shopping-cart");
            shoppingCart.innerHTML = '';
            shoppingCart.innerHTML = /*html*/
                `<div class="cart-cards__empty">
                    <p class="cart-cards__empty-text">Корзина пуста...</p>
                </div>`;
            alert("Корзина очищена");
        };
    };

    //</Functions>==============================================================================
};