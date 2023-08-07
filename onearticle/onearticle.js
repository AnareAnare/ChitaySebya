document.addEventListener('DOMContentLoaded', () => {
    const articlesBtns = document.querySelectorAll('.oa-btn-transparent');

    articlesBtns.forEach(btn => {
        btn.addEventListener('mouseover', (e) => {
            const parent = e.target.closest('.aside__item');
            const img = parent.querySelector('.aside__img img');
            img.classList.toggle('aside__img_active');
        });
        btn.addEventListener('mouseout', (e) => {
            const parent = e.target.closest('.aside__item');
            const img = parent.querySelector('.aside__img img');
            img.classList.toggle('aside__img_active');
        });
    });
});