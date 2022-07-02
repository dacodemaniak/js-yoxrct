// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Check if a div goes in inner vertical
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0]['isIntersecting'] === true) {
      if (entries[0]['intersectionRatio'] === 1)
        document.querySelector('#message').textContent =
          'Target is fully visible in screen : ' +
          entries[0].target.getAttribute('data-value');
      else if (entries[0]['intersectionRatio'] > 0.5)
        document.querySelector('#message').textContent =
          'More than 50% of target is visible in screen : ' +
          entries[0].target.getAttribute('data-value');
      else
        document.querySelector('#message').textContent =
          'Less than 50% of target is visible in screen : no value required';
    } else {
      document.querySelector('#message').textContent =
        'Target is not visible in screen : no value required';
    }
  },
  {
    threshold: [0, 0.5, 1],
    root: document.querySelector('#vertical-scroll-container'),
  }
);

const numbers = document.querySelectorAll('.scroll-item');
numbers.forEach((number) => {
  observer.observe(number);
});
