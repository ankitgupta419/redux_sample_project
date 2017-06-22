import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import movies from './movies';
import genre from './genre';

// Combine all our reducers togeher
const rootReducer = combineReducers({ movies, genre, routing: routerReducer });

export default rootReducer;
