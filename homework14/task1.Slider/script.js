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

            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[activeImageIndex + 1].classList.add(activeImageClass);

            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            pagination.children[activeImageIndex + 1].classList.add(activePaginationClass);

            if (activeImageIndex + 1 === lastImageIndex) {
                next.style.display = "none";
            }
            prev.style.display = "flex";
            activeImageIndex += 1;
        }
    })
    prev.addEventListener('click', function () {
        if (activeImageIndex > firstImageIndex) {

            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[activeImageIndex - 1].classList.add(activeImageClass);

            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            pagination.children[activeImageIndex - 1].classList.add(activePaginationClass);

            if (activeImageIndex - 1 === firstImageIndex) {
                prev.style.display = "none";
            }

            next.style.display = "flex";
            activeImageIndex -= 1;
        }

    })

    pagination.addEventListener('click', function (event) {
        if (event.target.tagName === 'SPAN') {

            const index = Array.from(pagination.children).indexOf(event.target);

            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[index].classList.add(activeImageClass);

            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            event.target.classList.add('pagination-active');

            activeImageIndex = index;

            next.style.display = (activeImageIndex + 1) === imagesCount ? "none" : "flex";
            prev.style.display = activeImageIndex === 0 ? "none" : "flex";
        }
    })
})()