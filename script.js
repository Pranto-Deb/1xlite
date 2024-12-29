// accordion element js
document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach((item, index) => {
        const content = item.querySelector(".thp-rules-content-accordion-item__content");
        const arrow = item.querySelector(".thp-rules-content-accordion-item-trigger__arrow");
        if (index === 0) {
            item.classList.add("active");
            content.style.display = "block";
            arrow.parentElement.classList.remove("thp-rules-content-accordion-item-trigger--is-closed");
        } else {
            item.classList.remove("active");
            content.style.display = "none";
            arrow.parentElement.classList.add("thp-rules-content-accordion-item-trigger--is-closed");
        }
    });

    accordionItems.forEach((item) => {
        const button = item.querySelector(".accordion-item__button");
        const arrow = item.querySelector(".thp-rules-content-accordion-item-trigger__arrow");
        button.addEventListener("click", () => {
            accordionItems.forEach((innerItem) => {
                innerItem.classList.remove("active");
                innerItem.querySelector(".thp-rules-content-accordion-item__content").style.display = "none";
                innerItem.querySelector(".thp-rules-content-accordion-item-trigger__arrow").parentElement.classList.add("thp-rules-content-accordion-item-trigger--is-closed");
            });

            item.classList.add("active");
            item.querySelector(".thp-rules-content-accordion-item__content").style.display = "block";
            arrow.parentElement.classList.remove("thp-rules-content-accordion-item-trigger--is-closed");
        });
    });
});


// modal elements js
const modal = document.getElementById('overlay');
const openModalButton = document.getElementById('open-modal-btn');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});


// animation elements js
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1500, 
        once: true,    
        offset: 100 
    });

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
});
