// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Place random item into view
const randomNumber = 3;

const targetElementPos = document.querySelector('[data-value="3"').offsetTop;
document.querySelector('#vertical-scroll-container').scrollTop =
  targetElementPos - 16;

// Check if a div goes in inner vertical
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0]['isIntersecting'] === true) {
      if (entries[0]['intersectionRatio'] === 1)
        document.querySelector('#message').textContent =
          'Target is fully visible in screen : ' +
          entries[0].target.getAttribute('data-value');
    }
  },
  {
    threshold: [1],
    root: document.querySelector('#vertical-scroll-container'),
  }
);

const numbers = document.querySelectorAll('.scroll-item');
numbers.forEach((number) => {
  observer.observe(number);
});
