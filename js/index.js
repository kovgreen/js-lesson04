const link = document.querySelector('a');
link.textContent = 'Programming Mentor';
link.href = 'https://programmingmentor.com';


const par = document.createElement('p');
par.textContent = 'Hello HTML from JavaScript!';
const sect = document.querySelector('section');
sect.appendChild(par);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara.cloneNode(true));

linkPara.parentNode.removeChild(linkPara);

// Bad practice, not recommended
// par.style.color = 'white';
// par.style.backgroundColor = 'black';
// par.style.padding = '10px';
// par.style.width = '250px';
// par.style.textAlign = 'center';

// Good practice:
par.classList.add('chosen');

const clock = document.querySelector('.clock');
setInterval( () => clock.innerText = (new Date()).toLocaleTimeString(), 1000);

const clickMeBtn = document.querySelector('.click-me');
clickMeBtn.addEventListener('click', clickMe);

function clickMe() {
    const p = document.createElement('p');
    p.textContent = 'New paragraph';
    sect.appendChild(p);
}

$('.dont-click-me').click(dontClick);

function dontClick() {
    $('p').toggle(2000);
}

// Calculator
const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digits button');
const opers = document.querySelectorAll('.opers button');
const eq = document.querySelector('.eq');

digits.forEach( btn => btn.addEventListener('click', digitPressed));
opers.forEach( btn => btn.addEventListener('click', operPressed));


function digitPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

function operPressed(e) {
    e.preventDefault();
    display.value += e.target.innerText;
}

eq.addEventListener('click', eqPressed);

function eqPressed(e) {
    e.preventDefault();
    display.value = eval(display.value);
}