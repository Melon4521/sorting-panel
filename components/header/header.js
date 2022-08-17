//<Popup>==============================================================================

let popupOpeners = document.querySelectorAll('.popup-opener[data-popup_open]');
const body = document.querySelector('body');
const lockElements = document.querySelector('.lock-padding');

let unlock = true;

if (popupOpeners.length > 0) {
    for (let i = 0; i < popupOpeners.length; i++) {
        let popupOpener = popupOpeners[i];
        popupOpener.addEventListener('click', (e) => {
            const dataAtribute = popupOpener.dataset.popup_open;
            let popup = document.querySelector(dataAtribute);
            popupOpen(popup)
            e.preventDefault()
        });
    };
};

function popupOpen(popup) {
    if (popup && unlock) {
        openedPopup = document.querySelector('.popup._open');
        if (openedPopup) {
            closePopup(openedPopup, false)
        } else {
            lockBody()
        };
        popup.classList.add('_open');
        popup.addEventListener('click', (e) => {
            if (!e.target.closest('.popup__content') || e.target.classList.contains('popup__close')) {
                closePopup(popup, true)
                e.preventDefault()
            };
        });
    };
};

function closePopup(popup, doUnlock) {
    if (popup && unlock) {
        popup.classList.remove('_open');
        if (doUnlock) {
            unlockBody();
        };
    };
};

function lockBody() {
    let widthWithoutScroll = window.innerWidth - document.documentElement.clientWidth;
    body.classList.add('_lock');
    body.style.paddingRight = widthWithoutScroll + 'px';
    if (lockElements) {
        for (let i = 0; i < lockElements.length; i++) {
            const elem = lockElements[i];
            elem.style.paddingRight = widthWithoutScroll + 'px';
        };
    };

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, 500);
};

function unlockBody() {
    setTimeout(() => {
        if (body.classList.contains('_lock')) {
            body.classList.remove('_lock');
            body.style.paddingRight = '0px';
        }
        if (lockElements) {
            for (let i = 0; i < lockElements.length; i++) {
                const elem = lockElements[i];
                elem.style.paddingRight = '0px';
            };
        };
    }, 300)

    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, 500);
};

//</Popup>==============================================================================

//<Padding to main element>==============================================================================

const headerElement = document.querySelector('.header'),
    mainElement = document.querySelector('.main');

let addPadding = () => {
    let paddingForMain = headerElement.getBoundingClientRect().height;
    mainElement.style.paddingTop = `${paddingForMain}px`;
}

document.addEventListener('scroll', () => {
    if (cheakScrollPosition(500)) {
        headerElement.classList.add('_header-fixed');
        addPadding();
    }
});

//</Padding to main element>==============================================================================

//<Burger menu>==============================================================================

const navigationMenu = document.querySelector('.menu-nav'),
    burgerButton = document.querySelector('.top-menu__burger');

burgerButton.addEventListener('click', openMenuBurger);

function openMenuBurger() {

    if (!navigationMenu.classList.contains('_burger-open') &&
    !burgerButton.classList.contains('_burger-open')) {
        burgerButton.classList.add('_burger-open');
        navigationMenu.classList.add('_burger-open');
        let scrollWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollWidth}px`;
        document.body.classList.add('_lock');
    } else {
        burgerButton.classList.remove('_burger-open');
        navigationMenu.classList.remove('_burger-open');
        document.body.classList.remove('_lock');
        document.body.style.paddingRight = `0px`;
    }
    
}

//</Burger menu>==============================================================================

// ======================================================================================
// ======================================================================================
// ======================================================================================

// <FUNCTIONS> ==============================================================================

function cheakMaxWidth(pixels) {
    let mediaQuery = window.matchMedia(`(max-width: ${pixels}px)`);
    return mediaQuery.matches
}

function cheakMinWidth(pixels) {
    let mediaQuery = window.matchMedia(`(min-width: ${pixels}px)`);
    return mediaQuery.matches
}

function cheakScrollPosition(coord) {
    return (window.pageYOffset >= coord) ? true : false;
}

// </FUNCTIONS> ==============================================================================