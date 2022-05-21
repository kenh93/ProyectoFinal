import axios from "axios";

export const tmdb = {
  urlBase: "https://api.themoviedb.org/3",
  apiKey: "?api_key=3076397010ace9e3d7664a0b7a67e02f",
  entity: {
    topRatedMovies: "/movie/top_rated",
    topRatedTv: "/tv/top_rated",
    popularMovies: "/movie/popular",
    popularTv: "/tv/popular",
    movieById: "/movie/",
    tvById: "/tv/",
  },
  language: {
    en: "&language=en-US",
    es: "&language=es-ES",
  },
  pagination: "&page=",
  imageUrl: "https://image.tmdb.org/t/p",
  quality: {
    posterSmall: "/w200",
    posterMedium: "/w300",
    posterLarge: "/w500",
    backdropSmall: "/w300",
    backdropMedium: "/w780",
    backdropLarge: "/w1280",
  },
};
export const apiQuality = {
  posterSmall: "posterSmall",
  posterMedium: "posterMedium",
  posterLarge: "posterLarge",
  backdropSmall: "backdropSmall",
  backdropMedium: "backdropMedium",
  backdropLarge: "backdropLarge",
};

export const apiEntity = {
  topRatedMovies: "topRatedMovies",
  topRatedTv: "topRatedTv",
  popularMovies: "popularMovies",
  popularTv: "popularTv",
  movieById: "movieById",
  tvById: "tvById",
};

export const apiLanguage = {
  english: "en",
  spanish: "es",
};
export const tryGetPopularMovies = async (page = 1) => {
  try {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=3076397010ace9e3d7664a0b7a67e02f&language=en-US&page=${page}`
    );
    return res.data.results;
  } catch (error) {
    return error;
  }
};

export const apiBuilder = {
  tryGet: async (entity, lang = "es", page = 1) => {
    const url = `${tmdb.urlBase}${tmdb.entity[entity]}${tmdb.apiKey}${tmdb.language[lang]}${tmdb.pagination}${page}`;
    try {
      console.log("url de apibuilder", url);
      const res = await axios(url);
      return res.data.results;
    } catch (error) {
      return error;
    }
  },
  tryGetById: async (entity, id, lang = "es") => {
    const url = `${tmdb.urlBase}${tmdb.entity[entity]}/${id}${tmdb.apiKey}${tmdb.language[lang]}`;
    try {
      const res = await axios(url);
      return res;
    } catch (error) {
      return error;
    }
  },
  tryGetImg: (path, quality = apiQuality.posterLarge) => {
    return `${tmdb.imageUrl}${tmdb.quality[quality]}${path}`;
  },
};

/*
export const tryGetTopRatedMovies = async (apiKey, page) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated/" +
        apiKey +
        "&language=es-ES&page=" +
        page
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
*/

/* 
  export const services = {
    getTopRatedMovies: async (page) => {
      const response = await API.tryGet('topRatedMovies', 'es', page);
      return response;
    },
  };
   */
/* 
  export const services = {
      tryGetTopRatedMovies: async (page = 1) => {
        const url = createUrl.api(API.entity.topRatedMovies, "es", page);
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          return error;
        }
      },
    }; 
  */
