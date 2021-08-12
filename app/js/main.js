import cursor from './modules/cursor';

window.addEventListener('DOMContentLoaded', () => {
    cursor();
});


$(function() {

    /** Slick Slider. Slider Progress Bar */
    function slickSliderSettings(sliderSelector, sliderProgressBar, sliderProgressLabel) {

        const $slider = $(sliderSelector),
            $progressBar = $(sliderProgressBar),
            $label = $(sliderProgressLabel);

        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            setProgress(nextSlide);
        });

        $slider.slick({
            infinite: true,
            arrows: true,
            slidesToScroll: 1,
            draggable: false,
            autoplay: true,
            prevArrow: '<img class="slider-arrows slider-arrows-left" src="./images/sliders/arrow-left.svg" alt="">',
            nextArrow: '<img class="slider-arrows slider-arrows-right" src="./images/sliders/arrow-right.svg" alt="">',
            speed: 1000,
        });

        setProgress(0);

        function setProgress(index) {

            const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;
            const slidersCount = '0' + +(index + 1);
          
            $progressBar
              .css('background-size', `${calc}% 100%`)
              .attr('aria-valuenow', calc);
    
            $label.text(slidersCount);
        }
    }

    slickSliderSettings('.top__slider', '.slider__control-bar', '.slider__control-current');
})