AOS.init();

const switcherBtn = document.getElementById("switcher");
const frontPage = document.querySelector(".front__page");
const backPage = document.querySelector(".back__page");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const eyeOpen = document.getElementById("eyeOpen");
const eyeClosed = document.getElementById("eyeClosed");

// тогл на око
toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";

  eyeOpen.style.display = isHidden ? "none" : "block";
  eyeClosed.style.display = isHidden ? "block" : "none";
});

// відключаємо кнопку до заповнення полів
function toggleSwitcherState() {
  const isEmailValid = emailInput.value.trim() !== "";
  const isPasswordValid = passwordInput.value.trim().length >= 8;

  switcherBtn.disabled = !(isEmailValid && isPasswordValid);
}

// лісенери
emailInput.addEventListener("input", toggleSwitcherState);
passwordInput.addEventListener("input", toggleSwitcherState);

// світчер
switcherBtn.addEventListener("click", () => {
  frontPage.style.display = "none";
  backPage.style.display = "flex";
});

// неактивна кнопка
switcherBtn.disabled = true;

$(".slick-photo").slick({
  adaptiveHeight: true,
  arrows: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
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
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 570,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".slick-vid").slick({
  adaptiveHeight: true,
  arrows: false,
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
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
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 570,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 380,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
