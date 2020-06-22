import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {title, genre, year, filmsList} = props;

  return (
    <Main
      title={title}
      genre={genre}
      year={year}
      filmsList={filmsList}
      onCardAction={() => {}}/>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  filmsList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default App;
