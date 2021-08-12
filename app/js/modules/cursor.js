const cursor = () => {

    const mouseCursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    const whiteBackgrounds = document.querySelectorAll('._white-bg');

    document.addEventListener('mousemove', (e) => {

        mouseCursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px";
    });
    
    mouseHover(links, mouseCursor);
    mouseHover(buttons, mouseCursor);
    mouseHover(whiteBackgrounds, mouseCursor);
};

function mouseHover(selector, cursor) {

    selector.forEach(item => {

        item.addEventListener('mouseover', () => {

            if(item.classList.contains('_white-bg')) cursor.classList.add('mouse-black');
            else cursor.classList.add('mouse-hover');
        })

        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('mouse-hover');
            cursor.classList.remove('mouse-black');
        })
    })
}

export default cursor;