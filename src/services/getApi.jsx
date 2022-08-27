const fetchApi = async () => {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR');
  const data = await response.json();
  return data;
}

const fetchApiSearch = async (movie) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR`);
  const data = await response.json();
  return data;
};

const fetchApiWatch = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR&append_to_response=videos`);
  const data = await response.json();
  return data;
}

const fetchApiDetails = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8426a1374a213b578abf04fbd0c08f8a&language=pt-BR`);
  const data = await response.json();
  return data;
}

export {fetchApi, fetchApiSearch, fetchApiWatch, fetchApiDetails};
