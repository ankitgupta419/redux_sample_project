function movies(state = [], action) {
  switch (action.type) {
    case 'NEW_MOVIE' :
      const i = action.index;
      return [
        ...state.slice(0, i),
        {...state[i]},
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}

export default movies;
