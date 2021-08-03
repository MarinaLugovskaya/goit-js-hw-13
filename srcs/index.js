// import './sass/main.scss';
// // import './js/image-finder';
// // import 'material-design-icons';

// import apiService from './js/apiService';
// import refs from './js/refs';
// import galleryMarkup from './templates/gallery-item-tpl.hbs';
// import * as basicLightbox from 'basiclightbox';
// import '../node_modules/basiclightbox/dist/basicLightbox.min.css';

// const { form, gallery, loadMoreBtn, loadMoreLabel, loadMoreSpinner } = refs;

// const loadMore = {
//   enable() {
//     loadMoreBtn.disabled = false;
//     loadMoreLabel.textContent = 'Показать ещё';
//     loadMoreSpinner.classList.add('is-hidden');
//   },
//   disable() {
//     loadMoreBtn.disabled = true;
//     loadMoreLabel.textContent = 'Загружаем...';
//     loadMoreSpinner.classList.remove('is-hidden');
//   },
//   show() {
//     loadMoreBtn.classList.remove('is-hidden');
//   },
// };

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const input = e.currentTarget.elements.query.value;
//   apiService.query = input.trim();

//   if (!apiService.query) return;
//   clearImgGallery();

//   apiService.resetPage();

//   fetchMoreImg();

//   gallery.addEventListener('click', e => {
//     e.preventDefault();

//     if (e.target.nodeName === 'IMG') {
//       const instance = basicLightbox.create(`
//         <img src="${e.target.dataset.source}">
//         `);
//       instance.show();
//     }
//   });

//   form.reset();
// });

// loadMoreBtn.addEventListener('click', fetchMoreImg);

// function fetchMoreImg() {
//   loadMore.disable();

//   apiService.fetchImg().then(data => {
//     renderImageGallery(data);
//     loadMore.show();
//     loadMore.enable();

//     // const element = document.getElementById('.my-element-selector');
//     loadMoreBtn.scrollIntoView({
//       behavior: 'smooth',
//       block: 'end',
//     });
//   });

//   // const element = document.getElementById('.my-element-selector');
// }

// function renderImageGallery(data) {
//   const markup = galleryMarkup(data);
//   gallery.insertAdjacentHTML('beforeend', markup);
// }

// function clearImgGallery() {
//   gallery.innerHTML = '';
// }
