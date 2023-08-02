document.addEventListener('DOMContentLoaded', () => {
    const oneServicesBtns = document.querySelectorAll('.o-btn-transparent');

    oneServicesBtns.forEach(btn => {
        btn.addEventListener('mouseover', (e) => {
            const parent = e.target.closest('.o-same-services__item');
            const img = parent.querySelector('.o-same-services__img img');
            img.classList.toggle('o-same-services__img_active');
        });
        btn.addEventListener('mouseout', (e) => {
            const parent = e.target.closest('.o-same-services__item');
            const img = parent.querySelector('.o-same-services__img img');
            img.classList.toggle('o-same-services__img_active');
        });
    });
});