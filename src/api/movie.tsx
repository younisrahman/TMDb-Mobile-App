import ApiCall from './ApiCall';
const api_key = 'api_key=699b4f84399ec170f877caac4b76a808';

export const popular = (page: number) => {
  return ApiCall.get(`/popular?page=${page}&${api_key}`);
};

export const latest = (page: number) =>
  ApiCall.get(`/now_playing?page=${page}&${api_key}`);

export const getDetailsByMovieId = (movie_id: number) =>
  ApiCall.get(`/${movie_id}?${api_key}`);

export const getMovieCastByMovieId = (movie_id: number) =>
  ApiCall.get(`/${movie_id}/credits?${api_key}`);
