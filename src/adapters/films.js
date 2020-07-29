const createFilm = (data) => {
  return {
    runTime: data.run_time,
    img: data.preview_image,
    title: data.name,
    genre: data.genre,
    year: data.released,
    filmBackground: data.background_image,
    poster: data.poster_image,
    score: data.rating,
    ratingCount: data.scores_count,
    paragraphs: data.description,
    director: data.director,
    starring: data.starring,
    preview: data.video_link,
    isFavorite: data.is_favorite,
    id: data.id
  };
};

export default createFilm;
