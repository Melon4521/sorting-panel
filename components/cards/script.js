//<Dynamic adaptive>==============================================================================

function doDynamicAvButtons(cardButtons) {
    if (cheakMaxWidth(600)) {
        cardButtons.forEach(cardButton => {
            let cardInfo = cardButton.closest('.catalog-card__info');
            let cardInfoBody = cardInfo.closest('.catalog-card__body');
            let cardButtonsNewParent = cardInfoBody.nextElementSibling;
            cardButton.remove(cardInfo);
            cardButtonsNewParent.append(cardButton);
        });
    }
}

function doDynamicAvTitles(cardTitles) {
    if (cheakMaxWidth(600)) {
        cardTitles.forEach(cardTitle => {
            let cardInfo = cardTitle.closest('.catalog-card__info');
            let cardInfoBody = cardInfo.closest('.catalog-card__body');
            let cardInfoBodyParent = cardInfoBody.parentElement;
            let cardTitlesNewParent = cardInfoBodyParent.querySelector('.catalog-card__media-title');
            cardTitle.remove(cardInfo);
            cardTitlesNewParent.append(cardTitle);
        });
    }
}

function cheakMaxWidth(pixels) {
    let mediaQuery = window.matchMedia(`(max-width: ${pixels}px)`);
    return mediaQuery.matches
}


var refreshId = setInterval(function () {
    let cardButtons = document.querySelectorAll('.card-info__buttons'),
        cardTitles = document.querySelectorAll('.card-info__title');

    if (cardButtons != false) {
        doDynamicAvButtons(cardButtons)
        doDynamicAvTitles(cardTitles)

        clearInterval(refreshId);
    };
}, 500);

//</Dynamic adaptive>==============================================================================