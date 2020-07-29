export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const DEFAULT_CARDS_COUNT = 8;
export const INCREASER_CARDS_COUNT = 8;
export const MORE_LIKE_THIS_CARDS_COUNT = 4;

export const getTimeLeft = (duration, currentTime) => {
  const timeLeft = duration - currentTime;
  const hours = Math.floor(timeLeft / 3600);
  let minutes = Math.floor(timeLeft / 60);
  let seconds = Math.floor(timeLeft % 60);
  if (minutes < 10) {
    minutes = `0` + minutes;
  }
  if (seconds < 10) {
    seconds = `0` + seconds;
  }
  return hours + `:` + minutes + `:` + seconds;
};

export const getFormattedTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};

const RatingMap = {
  0: `Bad`,
  3: `Normal`,
  5: `Good`,
  8: `Very good`,
  10: `Awesome`
};

export const getRatingLevel = (ratingValue) => {
  let lowerRate = 0;
  for (let rating of Object.keys(RatingMap)) {
    if (rating < ratingValue) {
      lowerRate = rating;
    }
  }
  return RatingMap[lowerRate];
};


