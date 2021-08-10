import cursor from './modules/cursor';

window.addEventListener('DOMContentLoaded', () => {
    cursor();
});


$(function() {
    $('.top__slider').slick({
        infinite: true,
        arrows: false,
    });
})