const contentLoad = () => {

    const content = document.querySelectorAll('.project-gallery__photos'),
        btn = document.querySelector('.project-gallery__btn');

    let contentItem = null;

    content.forEach(item => {

        if(item.style.display === 'none') {
            contentItem = item;
        }
    })

    let isOpen = true;

    btn.addEventListener('click', () => {

        if(isOpen) {

            contentItem.style.display = 'grid';
            isOpen = false;
            btn.textContent = 'Close more photos';
        } else {

            contentItem.style.display = 'none';
            isOpen = true;
            btn.textContent = 'View more photo';
        }
    })
}

export default contentLoad;