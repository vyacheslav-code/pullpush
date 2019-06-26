const slider = document.getElementById('slider');
const blueStripe = document.getElementById('blue-stripe');
const blueArrow = document.getElementById('blue-arrow');
const greenStripe = document.getElementById('green-stripe');
const greenArrow = document.getElementById('green-arrow');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');

const speed = 0.53;

slider.addEventListener('mousemove', function () {
    const value = slider.value;
    blueStripe.style.left = `${speed*slider.value - 54.6}%`;
    blueArrow.style.left = `${speed*slider.value - 2.6}%`;
    greenStripe.style.left = `${speed*slider.value}%`;
    greenArrow.style.left = `${speed*slider.value - 2.6}%`;
    if(value > 31 && value < 60) {
        text1.style.zIndex = '0';
        text2.style.zIndex = '996';
        text3.style.zIndex = '999';
        greenArrow.style.zIndex = '998';
        greenStripe.style.zIndex = '998';
        blueArrow.style.zIndex = '995';
        blueStripe.style.zIndex = '995';
    } else if(value >= 60) {
        text2.style.zIndex = '999';
        text3.style.zIndex = '996';
        greenArrow.style.zIndex = '995';
        greenStripe.style.zIndex = '995';
        blueArrow.style.zIndex = '998';
        blueStripe.style.zIndex = '998';
    } else {
        text1.style.zIndex = '';
        text2.style.zIndex = '';
        text3.style.zIndex = '';
        greenArrow.style.zIndex = '';
        greenStripe.style.zIndex = '';
        blueArrow.style.zIndex = '';
        blueStripe.style.zIndex = '';
    }
})