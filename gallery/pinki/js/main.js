function showForm(formName) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');

    if (formName === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginBtn.classList.remove('active');
        registerBtn.classList.add('active');
    } else if (formName === 'register') {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerBtn.classList.remove('active');
        loginBtn.classList.add('active');
    }
}

/* відразу показує форму логіна */
showForm('login');

$(function () {
    const container = document.querySelector('.why-join-container');
    const slides = document.querySelectorAll('.why-join-section');

    let currentIndex = 0;

    function autoScroll() {
        if (window.innerWidth <= 780) {
            currentIndex = (currentIndex + 1) % slides.length;
            container.scrollTo({
                left: slides[currentIndex].offsetLeft,
                behavior: 'smooth',
            });
        }
    }

    setInterval(autoScroll, 4000);

    $('.scroll-to').click(function () {
        var target = $(this).data('target');
        if ($(target).length) {
            $('html, body').animate(
                {
                    scrollTop: $(target).offset().top,
                },
                500,
            );
        }
    });

    
    $('.pngs-carousel').slick({
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $('.gifs-carousel').slick({
        adaptiveHeight: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        pauseOnHover: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    const background = document.querySelector('.background');
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';

        const size = Math.floor(Math.random() * 150) + 50;
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.top = `${top}vh`;
        circle.style.left = `${left}vw`;

        background.appendChild(circle);
    }
});
