let menu = {
    el: {
        burgerMenu: document.querySelector('.burger-menu'),
        menuTop: document.querySelector('.menu-top'),
        menuMiddle: document.querySelector('.menu-middle'),
        menuBottom: document.querySelector('.menu-bottom'),
    }
    ,

    init: function () {
        menu.bindUIactions();
    }
    ,

    bindUIactions: function() {
        menu.el.burgerMenu.addEventListener('click',function (event) {
            menu.activeMenu(event);
            event.preventDefault();
        }
    );
    }
    ,

    activeMenu: function () {
        menu.el.menuTop.classList.toggle('menu-top-click');
        menu.el.menuMiddle.classList.toggle('menu-middle-click');
        menu.el.menuBottom.classList.toggle('menu-bottom-click');
    }
};

menu.init();





// const BURGER_OPENED_CLASSNAME = 'burger__open';
// const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';
// const BODY_FIXED_CLASSNAME2 = 'body_fixed';

// const bodyNode2 = document.querySelector('body');
// const burgerNode = document.querySelector('.js-burger');
// const burgerBtnNode = document.querySelector('.js-burger-btn');
// const burgerContentNode = document.querySelector('.js-burger__content')

// burgerBtnNode.addEventListener('click', toggleBurger);

// burgerNode.addEventListener('click', (event) => {
//     const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

//     if (isClickOutsideContent) {
//         toggleBurger();
//     }
// })

// function toggleBurger() {
//     burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
//     bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME2);
//     burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
// }



