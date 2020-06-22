import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const promoMovieSettings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      title={promoMovieSettings.title}
      genre={promoMovieSettings.genre}
      year={promoMovieSettings.year}
      filmsList={films}
    />,
    document.querySelector(`#root`)
);
