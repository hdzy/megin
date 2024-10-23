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



document.querySelectorAll('.header--cont .nav-link.green, .order-btn').forEach((el) => {
    el.addEventListener('click', () => {
        document.body.style = 'overflow: hidden';
        document.querySelector('#f-pop').classList.add('active');
    })

})
document.querySelector('#f-pop').addEventListener('click', (e) => {
    if (e.target.classList.contains('reply-pop')) {
        document.body.style = '';
        document.querySelector('#f-pop').classList.remove('active');
    }
})

const btnfpop = document.querySelector('#f-pop');
btnfpop.querySelector('.default-btn').addEventListener('click', () => {
   if (btnfpop.querySelector('input[name="name"]').value.length >= 1
    && btnfpop.querySelector('input[name="phone"]').value.length >= 17
   ) {
       document.querySelector('#f-pop').classList.remove('active');
       // document.querySelector('#s-pop').classList.add('active');
   }
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


const forms = document.querySelectorAll('.contact-block form, .top--block form, #f-pop form');

forms.forEach((el) => {el.addEventListener('submit', (ev) => {


    ev.preventDefault();

    if (el.querySelector('input[name="phone"]').value.length >= 17) {
        let data = new FormData(el);

        // передаём в функцию fetch данные и получаем результат
        postData('http://101pointdev.ru/form.php', data).then((data) => {
            // обработка ответа от сервера
            // console.log(data);
        })
        const input = ev.target.querySelectorAll('input');

        input.forEach(el => {
            el.value = '';
        })

        document.body.style = 'overflow: hidden';
        document.querySelector('#s-pop').classList.add('active');
    }
})});

async function postData(url= '', data = {}) {
    const response = await fetch(url, { method: "POST", body: data });
    return await response.json();
}




window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel-input'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});
