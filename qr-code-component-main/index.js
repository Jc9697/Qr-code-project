const image = document.getElementById('image');

image.addEventListener('click', () => {
    console.log('clicked')
})
/* Just testing touchstart */
image.addEventListener('touchstart', () => {
    document.querySelector('body').style.backgroundColor = 'red'
})