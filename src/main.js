import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import pixabayApi from './js/pixabay-api';
import render from './js/render-functions';

const gallery = document.querySelector('.gallery');
const loader = document.createElement('div');
loader.className = 'loader';
gallery.appendChild(loader);

const errMessage = {
  position: 'topRight',
  theme: 'dark',
  color: '#ef4040',
  message:
    'Sorry, there are no images matching your search query. Please try again!',
};

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  loader.style.display = 'flex';
  gallery.innerHTML = '';
  gallery.appendChild(loader);

  pixabayApi(event.target.searchrequest.value)
    .then(({ hits }) => {
      loader.style.display = 'none';
      if (hits.length === 0) {
        iziToast.error(errMessage);
      } else {
        render(hits, gallery);
      }
      event.target.reset();
    })
    .catch(error => {
      loader.style.display = 'none';
      gallery.innerHTML =
        'Something went wrong. <br/>Please, check your connection and try again.';
      console.error(error);
      event.target.reset();
    });
});

const colorSwitcher = document.querySelector('.slide');
if (colorSwitcher) {
  colorSwitcher.addEventListener('click', e => {
    document.body.classList.toggle('black');
    document.body.firstElementChild.classList.toggle('black');
    document.getElementById('searchrequest').classList.toggle('black');
    e.target.firstElementChild.checked = !e.target.firstElementChild.checked;
  });

  setTimeout(() => {
    colorSwitcher.style.opacity = '0.1';
  }, 5000);
}
