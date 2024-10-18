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
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.product-pagination',
        clickable: true,
    },
});

const advantagesMob = new Swiper('.cards-swiper', {
    slidesPerView: 1,
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
