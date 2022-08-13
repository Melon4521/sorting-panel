//<Dynamic adaptive>==============================================================================

let cartButtons = document.querySelectorAll('.cart-info__buttons'),
    cartTitles = document.querySelectorAll('.cart-info__title');

doDynamicAvButtons()
doDynamicAvTitles()

function doDynamicAvButtons() {
    if (cheakMaxWidth(600)) {
        cartButtons.forEach(cartButton => {
            let cartInfo = cartButton.closest('.catalog-cart__info');
            let cartInfoBody = cartInfo.closest('.catalog-card__body');
            let cartButtonsNewParent = cartInfoBody.nextElementSibling;
            cartButton.remove(cartInfo);
            cartButtonsNewParent.append(cartButton);
        });
    }
}

function doDynamicAvTitles() {
    if (cheakMaxWidth(600)) {
        cartTitles.forEach(cartTitle => {
            let cartInfo = cartTitle.closest('.catalog-cart__info');
            let cartInfoBody = cartInfo.closest('.catalog-card__body');
            let cartInfoBodyParent = cartInfoBody.parentElement;
            let cartTitlesNewParent = cartInfoBodyParent.querySelector('.catalog-card__media-title');
            cartTitle.remove(cartInfo);
            cartTitlesNewParent.append(cartTitle);
        });
    }
}

function cheakMaxWidth(pixels) {
    let mediaQuery = window.matchMedia(`(max-width: ${pixels}px)`);
    return mediaQuery.matches
}

//</Dynamic adaptive>==============================================================================