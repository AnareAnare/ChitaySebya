document.addEventListener('DOMContentLoaded', () => {
    const tel = document.querySelector('#tel');
    const pTel = document.querySelector('#p-tel');
    const name = document.querySelector('#name');
    const pName = document.querySelector('#p-name');
    const descr = document.querySelector('#descr');
    const form = document.querySelector('#form');
    const err = document.querySelector('.invalid');
    const pErr = document.querySelector('.p-invalid');
    const needConsultBtn = document.querySelector('#need-consultation');
    const popUp = document.querySelector('.pop-up-wrapper');
    const popUpContent = document.querySelector('.pop-up');
    const popUpForm = document.querySelector('.pop-up__form');
    const closeFormBtn = document.querySelector('.pop-up__btn');
    const checkbox = document.querySelector('.p-checkbox-hidden');
    const checkboxQ = document.querySelector('.checkbox-hidden');
    const checkboxSpan = document.querySelector('.p-checkbox__span');
    const checkboxSpanQ = document.querySelector('.checkbox__span');
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const servicesBtnLinks = document.querySelectorAll('.services__btn');
    const btnCloseMenu = document.querySelector('.btn__close');
    const btnSwitchMenu = document.querySelector('.btn__secondmenu');
    const secondMenu = document.querySelector('.nav-second');
    const btnCloseSecondMenu = document.querySelector('.btn__close_second');
    const btnSwitchBack = document.querySelector('.btn-switchmenu');
    
    

    /* Свайпер*/
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

    /*img scale hover*/

    servicesBtnLinks.forEach(btn => {
        btn.addEventListener('mouseover', (e) => {
            const parent = e.target.closest('.services__item');
            const img = parent.querySelector('.services__img img');
            img.classList.toggle('services__img_active');
        });
        btn.addEventListener('mouseout', (e) => {
            const parent = e.target.closest('.services__item');
            const img = parent.querySelector('.services__img img');
            img.classList.toggle('services__img_active');
        });
    });


    /* Инпутмаск*/
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(tel);
    im.mask(pTel);

    /* Валидация формы с вопросом*/
    function validate() {
        const phone = tel.inputmask.unmaskedvalue();
        const regex = /^[0-9]+$/;
        const telTrue = phone.length === 10 && phone.match(regex);
        const nameTrue = name.value.trim() !== '';
        const descrTrue = descr.value.trim() !== '';
        const checkTrue = checkboxQ.checked;
        if (nameTrue === false) { name.classList.add('name2') }
        if (telTrue === false) { tel.classList.add('tel2') }
        if (descrTrue === false) { descr.setAttribute('placeholder', 'Заполните поле') }
        if (checkTrue === false) { checkboxSpanQ.classList.add('checkbox__span_red') }
        return telTrue && nameTrue && descrTrue && checkTrue;
    }

    function send() {
        const height = form.offsetHeight;
        const divSend = document.createElement('div');
        divSend.classList.add('title');
        divSend.textContent = 'Ваш вопрос отправлен';
        divSend.style.paddingTop = '50px';
        form.innerHTML = '';
        form.style.height = `${height}px`;
        form.append(divSend);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const valTrue = validate();
        if (valTrue) {
            send();
        } else {
            err.classList.add('block');
        }
    });

    /*need consultation*/
    function openpopUp() {
        popUp.classList.add('show');
    }

    function closepopUp() {
        popUp.classList.remove('show');
    }
    needConsultBtn.addEventListener('click', openpopUp);
    closeFormBtn.addEventListener('click', closepopUp);


    popUp.addEventListener('click', e => {
        let target = e.target;
        let popupClick = target == popUpContent || popUpContent.contains(target);
        if (!popupClick) {
            closepopUp();
        }
    });

    function pValidate() {
        const pPhone = pTel.inputmask.unmaskedvalue();
        const regex = /^[0-9]+$/;
        const telTrue = pPhone.length === 10 && pPhone.match(regex);
        const nameTrue = pName.value.trim() !== '';
        const checkTrue = checkbox.checked;
        if (nameTrue === false) { pName.classList.add('name2') }
        if (telTrue === false) { pTel.classList.add('tel2') }
        if (checkTrue === false) { checkboxSpan.classList.add('p-checkbox__span_red') }
        return telTrue && nameTrue && checkTrue;
    }

    function pSend() {
        const height = popUpForm.offsetHeight;
        const divSend = document.createElement('div');
        divSend.classList.add('pop-up__header');
        divSend.textContent = 'Форма отправлена. С Вами свяжутся в ближайшее время';
        divSend.style.paddingTop = '50px';
        popUpForm.innerHTML = '';
        popUpForm.style.height = `${height}px`;
        popUpForm.append(divSend);
    }

    popUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const valTruePop = pValidate();
        if (valTruePop) {
            pSend();
        } else {
            pErr.classList.add('block');
        }
    });

    /*burger*/
    burger.addEventListener('click', (e) => {
        menu.classList.add('nav__active');
        document.body.classList.add('stop-scroll');
        e._isClickWithInMenu = true;
      });
      
    /* Menu */
    function closeMenu() {
        menu.classList.remove('nav__active');
        document.body.classList.remove('stop-scroll');
        secondMenu.classList.remove('nav__active_second');   
    }

    btnCloseMenu.addEventListener('click', (e) => {
        closeMenu(); 
    });

    btnCloseSecondMenu.addEventListener('click', (e) => {
        closeMenu(); 
    });

    btnSwitchMenu.addEventListener('click', () => {
        secondMenu.classList.add('nav__active_second');
    });

    btnSwitchBack.addEventListener('click', () => {
        secondMenu.classList.remove('nav__active_second');
    });

    document.querySelector('.nav').addEventListener('click', (e) => {
        e._isClickWithInMenu = true;
    });

    document.querySelector('.nav-second').addEventListener('click', (e) => {
        e._isClickWithInMenu = true;
    });

    document.body.addEventListener('click', (e) => {
        if (e._isClickWithInMenu) return;
        closeMenu();    
    });

    if (document.querySelector('.nav-second')) {
        const menuLinks = document.querySelectorAll('.nav__link');
        menuLinks.forEach((link) => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });
    }
});