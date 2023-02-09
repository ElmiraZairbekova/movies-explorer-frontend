export function handleChangeDuration(duration, movie) {
  if (duration < 60) {
    return `${movie.duration} мин`;
  }
  if (duration > 60 && duration < 120) {
    return `1 час ${movie.duration - 60} мин`;
  }

  if (duration > 120) {
    return `2 часа ${movie.duration - 120} мин`;
  }

  if (duration === 60) {
    return `1 час`;
  }
  if (duration === 120) {
    return `2 часа`;
  }
}

export const WIDTH_768PX = 768;
export const WIDTH_1025PX = 1025;
export const WIDTH_1280PX = 1280;
export const MAX_ELEMENTS = 120;
export const TIMEOUT = 1000;
export const WIDTH_768PX_INITIAL_CARDS = 5;
export const WIDTH_1025PX_INITIAL_CARDS = 6;
export const WIDTH_1280PX_INITIAL_CARDS = 9;

export const SHORT_MOVIE_DURATION = 40;
export const SHORT_MOVIE_DURATION3 = 360;