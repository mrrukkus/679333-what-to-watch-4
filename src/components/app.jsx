import React from "react";
import Main from "../components/main.jsx";
import PropTypes from "prop-types";


const App = (props) => {
  const {title, genre, year, filmsTitles} = props;

  return (
    <Main title={title} genre={genre} year={year} filmsTitles={filmsTitles}/>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  filmsTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
