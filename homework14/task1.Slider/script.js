"use strict";
(function slider() {
    const prev = document.querySelector('.js--slider__prev');
    const next = document.querySelector('.js--slider__next');
    const list = document.querySelector('.js--list');

    const activeImageClass = 'active';
    const activePaginationClass = 'pagination-active'

    let activeImage = list.getElementsByClassName(activeImageClass)[0];
    let activeImageIndex = Array.from(list.children).indexOf(activeImage);

    const pagination = document.querySelector('.js--pagination');
    const imagesCount = list.children.length;
    const firstImageIndex = 0;
    const lastImageIndex = imagesCount - 1;

    next.addEventListener('click', function () {
        if (activeImageIndex < lastImageIndex) {
            //видалення активного класу з поточного елемента і додавання наступному
            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[activeImageIndex + 1].classList.add(activeImageClass);

            // видалення активної пагінації з поточного елемента і додавання наступній
            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            pagination.children[activeImageIndex + 1].classList.add(activePaginationClass);

            //при переході з передостанбого елементу на останній ховаємо стрілочку
            if (activeImageIndex === lastImageIndex-1) {
                next.style.display = "none";
            }
            // якщо активний індекс - перший(0) ховаємо праву стрілку
            if (activeImageIndex === firstImageIndex) {
            prev. style.display = "flex";
            }
            //активний індекс збільшуємо на один
            activeImageIndex += 1;
        }
    })
    prev.addEventListener('click', function () {

        if (activeImageIndex > firstImageIndex) {
            // якщо фктивний індекс не перший(0) видаляємо активний клас і додаємо наступному справа

            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[activeImageIndex - 1].classList.add(activeImageClass);

            // те ж саме з пагінацією
            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            pagination.children[activeImageIndex - 1].classList.add(activePaginationClass);

            //при переході з 1 елементу на 0 скриваємо праву стрілочку
            if (activeImageIndex === firstImageIndex + 1) {
                prev.style.display = "none";
            }

            //а ліву відкриваємо
            next.style.display = "flex";
            //зменшуємо активний індекс на 1
            activeImageIndex -= 1;
        }

    })

    pagination.addEventListener('click', function (event) {

        //якщо цільовий елемент - спан
        if (event.target.tagName === 'SPAN') {
            //створити масив і вирахувати індекс елемента по якому був клік
            const index = Array.from(pagination.children).indexOf(event.target);

            //з ліста лішок видалити активний клас з потосного ел. і додати до індекса пагінації
            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[index].classList.add(activeImageClass);

            //те ж саме з пагінацією
            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            event.target.classList.add(activePaginationClass);

            //зробити активний індекс таким же як індекс пагінації
            activeImageIndex = index;

            //зробити невидимими стрілочки у першого і останнього ел.
            next.style.display = activeImageIndex === lastImageIndex ? "none" : "flex";
            prev.style.display = activeImageIndex === 0 ? "none" : "flex";
        }
    })
})()