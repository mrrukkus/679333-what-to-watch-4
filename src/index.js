import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

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
    />,
    document.querySelector(`#root`)
);
