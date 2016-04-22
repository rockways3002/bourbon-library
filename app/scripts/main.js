'use strict';

// define global variable
var Rakbuku = {};

(function($, W, R) {

    R.app = function() {

        var mainLogo = $('.logo'),
            isHero = '.hero',
            isServices = '.is-services',
            isOutwork = '.is-outwork',
            isAbout = '.is-about',
            isContact = '.is-contact',
            none = 'none-display',

            /*All actions of home screen*/
            homeScript = function() {

                var logo = $('.logo__a--main'),
                    menu = $('.menu-items'),
                    heroInitLeft = $('.hero__indct--left'),
                    heroInitRight = $('.hero__indct--right'),
                    bounceInDown = 'is-bounce-in-down',
                    fadeInRight = 'is-fade-in-right',
                    rotateInDownRight = 'is-rotate-in-down-right',
                    rotateInDownLeft = 'is-rotate-in-down-left';

                logo.removeClass(bounceInDown);
                menu.removeClass(fadeInRight);
                heroInitLeft.removeClass(rotateInDownRight);
                heroInitRight.removeClass(rotateInDownLeft);
                logo.addClass(bounceInDown);

                if (!menu.hasClass(fadeInRight)) {
                    setTimeout(function() {
                        menu.addClass(fadeInRight);
                    }, 1000);
                }

                setTimeout(function() {
                    heroInitLeft.addClass(rotateInDownRight);
                }, 2000);

                setTimeout(function() {
                    heroInitRight.addClass(rotateInDownLeft);
                }, 3000);
            },

            /*Actions of menu*/
            menuScript = function() {

                $('.menu-items .item__link').on('click', function(event) {

                    var itemActive = 'item--active';

                    if (!$(this).hasClass(itemActive)) {

                        var isActive = $(this).attr('href');

                        window.scrollTo(0, 0);
                        $('.menu-items .item__link').removeClass(itemActive);
                        $(this).addClass(itemActive);

                        switch (isActive) {
                            case '#home':
                                displayLogo();
                                itemsActive(isHero);
                                break;
                            case '#services':
                                hiddenLogo();
                                itemsActive(isServices);
                                servicesScript();
                                break;
                            case '#outwork':
                                hiddenLogo();
                                itemsActive(isOutwork);
                                outworkScript();
                                break;
                            case '#about':
                                hiddenLogo();
                                itemsActive(isAbout);
                                aboutScript();
                                break;
                            case '#contact':
                                hiddenLogo();
                                itemsActive(isContact);
                                contactScript();
                                break;
                        }

                    };

                });
            },

            /*Actions of the services screen*/
            servicesScript = function() {

                var webDesign = $('.js-webdesign'),
                    webDevelopment = $('.js-webdevelopment'),
                    webResponsive = $('.js-responsive'),
                    pcImage = $('.image-item--pc'),
                    tabletImage = $('.image-item--tablet'),
                    mobileImage = $('.image-item--mobile'),
                    fadeInLeft = 'is-fade-in-left',
                    fadeInDownBig = 'is-fade-in-down-big';

                webDesign.add(webDevelopment).add(webResponsive).removeClass(fadeInLeft);
                pcImage.add(tabletImage).add(mobileImage).removeClass(fadeInDownBig);

                setTimeout(function() {
                    webDesign.addClass(fadeInLeft);
                    pcImage.addClass(fadeInDownBig);
                }, 1000);

                setTimeout(function() {
                    webDevelopment.addClass(fadeInLeft);
                    tabletImage.addClass(fadeInDownBig);
                }, 2000);

                setTimeout(function() {
                    webResponsive.addClass(fadeInLeft);
                    mobileImage.addClass(fadeInDownBig);
                }, 3000);

            },

            /*Actions of the about us screen*/
            aboutScript = function() {

                var ceo = $('.js-ceo'),
                    designer = $('.js-designer'),
                    developer = $('.js-developer'),
                    aboutDisc = $('.about--disc'),
                    aboutList = $('.about-list-title'),
                    fadeIn = 'is-fade-in',
                    bounceInDown = 'is-bounce-in-down',
                    bounceIn = 'is-bounce-in';

                ceo.add(designer).add(developer).removeClass(fadeIn);
                aboutDisc.removeClass(bounceInDown);
                aboutList.removeClass(bounceIn);

                setTimeout(function() {
                    aboutDisc.addClass(bounceInDown);
                }, 1000);

                setTimeout(function() {
                    aboutList.addClass(bounceIn);
                }, 2000);

                setTimeout(function() {
                    ceo.addClass(fadeIn);
                }, 3000);

                setTimeout(function() {
                    designer.addClass(fadeIn);
                }, 4000);

                setTimeout(function() {
                    developer.addClass(fadeIn);
                }, 5000);

            },

            /*Actions of the outwork screen*/
            outworkScript = function() {

                var outworkItems = $('.outworks__item'),
                    bounceIn = 'is-bounce-in';

                setTimeout(function() {
                    for (var i = 0, len = outworkItems.length; i < len; i++) {
                        $(outworkItems[i]).addClass(bounceIn);
                    }
                }, 1000);

            },

            /*Actions of the contact creen*/
            contactScript = function() {

                var name = $('#name'),
                    email = $('#email'),
                    subject = $('#subject'),
                    messages = $('#messages'),
                    submit = $('#submit'),
                    bounceIn = 'is-bounce-in';

                name.add(email).add(subject).add(messages).add(submit).removeClass(bounceIn);

                setTimeout(function() {
                    name.addClass(bounceIn);
                }, 1000);

                setTimeout(function() {
                    email.addClass(bounceIn);
                }, 2000);

                setTimeout(function() {
                    subject.addClass(bounceIn);
                }, 3000);

                setTimeout(function() {
                    messages.addClass(bounceIn);
                }, 4000);

                setTimeout(function() {
                    submit.addClass(bounceIn);
                }, 5000);

            },

            itemsActive = function(item) {

                var items = [isHero, isServices, isAbout, isOutwork, isContact];

                for (var i = 0, len = items.length; i < len; i++) {

                    if (items[i] != item) {
                        if (!$(items[i]).hasClass(none)) {
                            $(items[i]).addClass(none);
                        };
                    } else {
                        if ($(items[i]).hasClass(none)) {
                            $(items[i]).removeClass(none);
                        }
                    }

                }
            },

            hiddenLogo = function() {

                if (!mainLogo.hasClass(none)) {
                    mainLogo.addClass(none);
                };

            },

            displayLogo = function() {

                if (mainLogo.hasClass(none)) {
                    mainLogo.removeClass(none);
                };

            };

        //###############################
        // Public methods
        //###############################
        this.init = function() {
            homeScript();
            menuScript();
        };
    };

}(window.jQuery, window, Rakbuku));


// call init function once document is ready.
window.jQuery(document).ready(function() {
    new Rakbuku.app().init();
});