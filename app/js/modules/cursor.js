const cursor = () => {

    const mouseCursor = document.querySelector('.cursor');
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');

    document.addEventListener('mousemove', (e) => {

        mouseCursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px";
    });
    
    mouseHover(links, mouseCursor);
    mouseHover(buttons, mouseCursor);
};

function mouseHover(selector, cursor) {

    selector.forEach(item => {

        item.addEventListener('mouseover', () => {
            cursor.classList.add('mouse-hover');
        })

        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('mouse-hover');
        })
    })
}

export default cursor;