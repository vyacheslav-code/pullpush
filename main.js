const slider = document.getElementById('slider');
const stripe = document.getElementById('stripe');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');

slider.addEventListener('mousemove', function () {
    const value = slider.value;
    stripe.style.background = `linear-gradient(90deg, blue ${value}%, green ${value}%)`;
    if (value < 20) {
        text1.style.opacity = `${1 - 0.05*value}`;
    } else if (value >= 20 && value < 100) {
        text3.style.opacity = `${1 - 0.025*(value - 20)}`;
    }
    if ( value >= 50) {
        text2.style.opacity = `${0.1*(value - 50)}`
    }
    
})