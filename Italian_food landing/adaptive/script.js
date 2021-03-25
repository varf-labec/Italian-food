window.onscroll = function () {
    if (window.pageYOffset > 500) { document.getElementById('full_screen_go_up_block').style.display = "block"; }
    else { document.getElementById('full_screen_go_up_block').style.display = "none";}
};

(function () {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}());
