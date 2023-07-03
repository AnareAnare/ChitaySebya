document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true',
        },
    });

    const tel = document.getElementById('tel');
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(tel);
});