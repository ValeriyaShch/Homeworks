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
    const images = [...list.children];
    const imagesCount = images.length;
    const firstImageIndex = 0;
    const lastImageIndex = imagesCount - 1;

    next.addEventListener('click', function () {
        if (activeImageIndex < lastImageIndex) {
            // Change active image
            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[activeImageIndex + 1].classList.add(activeImageClass);

            //Change active pagination dot
            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            pagination.children[activeImageIndex + 1].classList.add(activePaginationClass);

            // Hide the Right arrow if the next image is the last
            if (activeImageIndex + 1 === lastImageIndex) {
                next.style.display = "none";
            }

            // Show the Left arrow
            prev.style.display = "flex";

            // Save the index of a newly selected image
            activeImageIndex += 1;
        }
    })
    prev.addEventListener('click', function () {
        if (activeImageIndex > firstImageIndex) {
            // Change active image
            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[activeImageIndex - 1].classList.add(activeImageClass);

            //Change active pagination dot
            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            pagination.children[activeImageIndex - 1].classList.add(activePaginationClass);

            // Hide the Left arrow if the previous image is the first
            if (activeImageIndex - 1 === firstImageIndex) {
                prev.style.display = "none";
            }

            // Show the Left arrow
            next.style.display = "flex";

            // Save the index of a newly selected image
            activeImageIndex -= 1;
        }

    })

    pagination.addEventListener('click', function (event) {
        if (event.target.tagName === 'SPAN') {
            // find an index of a Span clicked
            const index = Array.from(pagination.children).indexOf(event.target);

            // Change active image
            list.children[activeImageIndex].classList.remove(activeImageClass);
            list.children[index].classList.add(activeImageClass);

            // Change active pagination dot
            pagination.children[activeImageIndex].classList.remove(activePaginationClass);
            event.target.classList.add('pagination-active');

            // Save the index of a newly selected image
            activeImageIndex = index;

            // Hide right arrow if it's the last image
            if ((activeImageIndex + 1) === imagesCount) {
                next.style.display = "none";
            } else {
                next.style.display = "flex";
            }

            // Hide left arrow if it's the first image
            if (activeImageIndex === 0) {
                prev.style.display = "none";
            } else {
                prev.style.display = "flex";
            }
        }
    })
})()