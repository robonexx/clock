// digital clock
const clock = document.querySelector('.clock');


// analog clock
const clockAnalog = document.querySelector('.clockFrame');
const clockBtn = document.querySelector('.clock-btn');

const tick = () => {

    const now = new Date();

    const hrs = now.getHours();

    const min = now.getMinutes();

    const sec = now.getSeconds();

    const html = `
    <p class="text">
    Your local time is </p>
    <span>${hrs}</span> :
    <span>${min}</span> :
    <span>${sec}</span> 
    `;
    clock.innerHTML = html;
};

setInterval(tick, 1000);




clockBtn.addEventListener('click', (e) => {

    if(clockAnalog.style.display === 'block'){
    clockAnalog.style.display = 'none';
} else {
    clockAnalog.style.display = 'block';
}

})
/* CLOCK JS */
const deg = 6;
const hour = document.querySelector('#h');
const min = document.querySelector('#m');
const sec = document.querySelector('#s');

setInterval(() => {

let day = new Date();
let h = day.getHours() * 30;
let m = day.getMinutes() * deg;
let s = day.getSeconds() * deg;

hour.style.transform = `rotateZ(${(h)+(m/12)}deg)`;
min.style.transform = `rotateZ(${m}deg)`;
sec.style.transform = `rotateZ(${s}deg)`;

});