const key = "e227ee5125195f1cb7c7a095bc090230";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${key}&with_genres=35`,
  fetchHorroMovies: `/discover/movie?api_key=${key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${key}&with_genres=99`,
};

export default requests;
