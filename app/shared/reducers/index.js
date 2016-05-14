import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import job from './job';
import project from './project';
import github from './github';

export default function getRootReducer(scope = 'main') {
  let reducers = {
    job,
    project,
    github,
  };

  if (scope === 'renderer') {
    reducers = {
      ...reducers,
      routing,
    };
  }
  return combineReducers({ ...reducers });
}
