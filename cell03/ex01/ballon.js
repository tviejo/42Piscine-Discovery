function makebigger() {
    const balloon = document.getElementById('balloon');
    const currentHeight = balloon.offsetHeight;
    const currentWidth = balloon.offsetWidth;
    if (!(currentHeight >= 420 || currentWidth >= 420)) {
        balloon.style.height = (currentHeight + 10) + 'px';
        balloon.style.width = (currentWidth + 10) + 'px';
    }
    else
    {
        balloon.style.height = "200px";
        balloon.style.width = "200px";
    }

    const colors = ['green', 'blue' , 'red'];
    const currentColor = balloon.style.backgroundColor;
    const currentIndex = colors.indexOf(currentColor);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    balloon.style.backgroundColor = nextColor;
}

function shrink() {
    const balloon = document.getElementById('balloon');
    const currentHeight = balloon.offsetHeight;
    const currentWidth = balloon.offsetWidth;
    if (currentHeight >= 200 || currentWidth >= 200) {
        balloon.style.height = (currentHeight - 5) + 'px';
        balloon.style.width = (currentWidth - 5) + 'px';
    }

    const colors = ['green', 'red', 'blue'];
    const currentColor = balloon.style.backgroundColor;
    const currentIndex = colors.indexOf(currentColor);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    balloon.style.backgroundColor = nextColor;
}