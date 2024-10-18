const reviews = new Swiper('.reviews-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.reviews-controls .next',
        prevEl: '.reviews-controls .prev',
    },
});

const productMob = new Swiper('.product-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.product-pagination',
        clickable: true,
    },
});

const advantagesMob = new Swiper('.cards-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.cards-pagination',
        clickable: true,
    },
})

const gallery = new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.gallery-controls .next',
        prevEl: '.gallery-controls .prev',
    },
})

const galleryMob = new Swiper('.swiper-gallery-mob', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.gallery-mob-pagination',
        clickable: true,
    },
})

const reviewsMob = new Swiper('.reviews-mob-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.reviews-mob-pagination',
        clickable: true,
    },
})
document.querySelectorAll('.qa-section .question').forEach((ev) => {
   ev.addEventListener('click', (e) => {
       let target = e.target;

       while (!target.classList.contains('question')) {
           target = target.parentNode
       }

       const active = document.querySelector('.qa-section .question.active');

       if (active) {
           active.classList.remove('active');
       }

       if (active !== target) {
           target.classList.add('active');
       }
   })
})



document.querySelector('.header--cont .nav-link.green').addEventListener('click', () => {
    document.body.style = 'overflow: hidden';
    document.querySelector('#f-pop').classList.add('active');
})

document.querySelector('#f-pop').addEventListener('click', (e) => {
    if (e.target.classList.contains('reply-pop')) {
        document.body.style = '';
        document.querySelector('#f-pop').classList.remove('active');
    }
})

document.querySelector('#f-pop .default-btn').addEventListener('click', () => {
    document.querySelector('#f-pop').classList.remove('active');
    document.querySelector('#s-pop').classList.add('active');
})

document.querySelector('#s-pop').addEventListener('click', (e) => {
    if (e.target.classList.contains('reply-pop')) {
        document.body.style = '';
        document.querySelector('#s-pop').classList.remove('active');
    }
})

document.querySelector('#s-pop .default-btn').addEventListener('click', (e) => {
        document.body.style = '';
        document.querySelector('#s-pop').classList.remove('active');
})
