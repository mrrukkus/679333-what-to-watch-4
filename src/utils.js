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
