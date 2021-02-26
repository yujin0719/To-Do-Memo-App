const button = document.querySelector('.filter');
const cards = document.querySelectorAll('.card__item');

function displayAll(){
    cards.forEach((item) => {
        item.classList.add('showing');
    });
}
function onButtonClick(e) {
  const name = e.target.className;
  if (name === 'all') {
    displayAll();
  } else {
    cards.forEach((item) => {
      if (
        item.childNodes[1].className.includes(name) ||
        item.childNodes[3].className.includes(name)
      ) {
        if (item.classList.contains('showing')) {
          item.classList.remove('showing');
        } else {
          item.classList.add('showing');
        }
      }
    });
  }
}
displayAll();
button.addEventListener('click', (event) => onButtonClick(event));
