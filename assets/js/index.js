const reviews = new Swiper('.reviews-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.reviews-controls .next',
        prevEl: '.reviews-controls .prev',
    },
})
