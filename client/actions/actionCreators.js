export function newMovie(i) {
  return {
    type: 'NEW_MOVIE',
    index: i
  };
}

export function newGenre(i) {
  return {
    type: 'NEW_GENRE',
    index: i
  };
}