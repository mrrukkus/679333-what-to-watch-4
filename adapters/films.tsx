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
    preview: data.preview_video_link,
    isFavorite: data.is_favorite,
    video: data.video_link,
    id: data.id,
  };
};

interface Film {
  runTime: number,
  img: string,
  title: string,
  genre: string,
  year: number,
  filmBackground: string,
  poster: string,
  score: number,
  ratingCount: number,
  paragraphs: string,
  director: string,
  starring: string[],
  preview: string,
  isFavorite: boolean,
  video: string,
  id: number
  comments: any
}

export {Film};
export default createFilm;
