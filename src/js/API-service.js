import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '22641563-e3a9716a3c097249b8be22daf';


export default class NewsApiService {
  constructor (){
      this.searchQuery = '';
      this.page = 1;
      this.totalHits = '';

  }

fetchArticles() {

  return axios.get(`https://pixabay.com/api/?key=22641563-e3a9716a3c097249b8be22daf&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`)
  .then(({ data }) => {
                    this.incrementPage();
                    return data.hits;
        })
        .catch(error => console.log(error));

  }
     
      incrementPage() {
        this.page +=1;
      }

  resetPage () {
      this.page = 1;
  };
  
  get query() {
      return this.searchQuery;
  }
  
  set query(newQuery) {
   this.searchQuery = newQuery;
}

}
