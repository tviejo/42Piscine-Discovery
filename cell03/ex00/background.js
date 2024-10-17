function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}