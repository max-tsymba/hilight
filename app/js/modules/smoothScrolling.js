const smoothScrolling = () => {

    const body = document.body;
    const scrollWrap = document.querySelector('#smooth-scrolling');
    const height = body.getBoundingClientRect().height - 1,
        speed = 0.05;

    let offset = 0;

    body.style.height = Math.floor(height) + 'px';

    function smoothScroll() {

        offset += (window.pageYOffset - offset) * speed;

        let scroll = "translateY(-" + offset + "px) translateZ(0)";
        scrollWrap.style.transform = scroll;

        let callScroll = requestAnimationFrame(smoothScroll);
    }

    smoothScroll();

};

export default smoothScrolling;