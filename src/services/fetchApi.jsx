import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f6352dcc8bb6548bb49d551f5d46c756';

export async function fetchApi() {
  const END_POINTS = 'trending/movie/day';
  const response = await axios.get(
    `${END_POINTS}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovie(movieId) {
  const END_POINTS = `movie/${movieId}`;
  const response = await axios.get(
    `${END_POINTS}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovieActors(movieId) {
  const END_POINTS = `movie/${movieId}/credits`;
  const response = await axios.get(
    `${END_POINTS}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovieReviews(movieId) {
  const END_POINTS = `movie/${movieId}/reviews`;
  const response = await axios.get(
    `${END_POINTS}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
}

export async function fetchApiMovieSearch(query) {
  const END_POINTS = `search/movie`;
  const response = await axios.get(
    `${END_POINTS}?query=${query}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data;
}
