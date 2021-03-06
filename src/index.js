import './sass/main.scss';
import card from './templates/gallery-item.hbs';
import Notiflix from "notiflix";
import NewsApiService from './js/API-service';


const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryList: document.querySelector('.gallery'),
  searchBtn: document.querySelector('.searchBtn'),
  loadMoreBtn: document.querySelector('.load-more'),
};
const newsApiService = new NewsApiService();
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

refs.loadMoreBtn.style.display = 'none';

async function onSearch(evt) {
evt.preventDefault();
clearImgGallery();
newsApiService.searchQuery = evt.currentTarget.elements.searchQuery.value;
refs.loadMoreBtn.style.display = 'initial';
newsApiService.resetPage();
  // API.query = newsApiService.query.trim();

    if (newsApiService.searchQuery === '') {
        return;
    };

    // if (!API.query) return;



    try {
        const result = await newsApiService.fetchArticles()
        .then(data => {
        renderImgGallery(data)}
        )
     return Notiflix.Notify.success(`Hooray! We found ${result.totalHits} images.`);
      if (result.hits.length === 0) {
        refs.loadMoreBtn.style.display = 'initial';
          Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
          return;
      };
      
      refs.loadMoreBtn.style.display = 'none';
   
      

  } catch (error) {
      console.log(error);
  }
}


async function onLoadMore() {
  const result = await newsApiService.fetchArticles()
  .then(renderImgGallery);

}

function renderImgGallery(data){
  refs.galleryList.insertAdjacentHTML('beforeend', card(data));
};

function clearImgGallery() {
  refs.galleryList.innerHTML = '';
}