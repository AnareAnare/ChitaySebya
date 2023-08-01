document.addEventListener('DOMContentLoaded', () => {
    const servicesBtns = document.querySelectorAll('.ss-btn-transparent');

    servicesBtns.forEach(btn => {
        btn.addEventListener('mouseover', (e) => {
            const parent = e.target.closest('.ss-items__item');
            const img = parent.querySelector('.ss-items__img img');
            img.classList.toggle('ss-items__img_active');
        });
        btn.addEventListener('mouseout', (e) => {
            const parent = e.target.closest('.ss-items__item');
            const img = parent.querySelector('.ss-items__img img');
            img.classList.toggle('ss-items__img_active');
        });
    });
});