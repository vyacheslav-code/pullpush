const slider = document.getElementById('slider');
const stripe = document.getElementById('stripe-image');
const separator = document.getElementById('separator');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');

const stripeSpeed = 1.35;
const text1OpacitySpeed = 0.05;
const text2OpacitySpeed = 0.025;
const text3OpacitySpeed = 0.1;

slider.addEventListener('mousemove', function () {
    const value = slider.value;
    stripe.style.marginRight = `-${value*stripeSpeed}%`;
    if (value < 20) {
        text1.style.opacity = `${1 - text1OpacitySpeed*value}`;
    } else if (value >= 20 && value < 100) {
        text3.style.opacity = `${1 - text2OpacitySpeed*(value - 20)}`;
    }
    if ( value >= 70) {
        text2.style.opacity = `${text3OpacitySpeed*(value - 70)}`
    }
})