/* eslint-disable no-param-reassign */
import {
  SET_REMINDERS_ENABLED,
  SET_POMODORO_ENABLED,
  SET_GITHUB_ENABLED,
} from '../actions/settings';

const initialState = {
  remindersEnabled: false,
  pomodoroEnabled: false,
  githubEnabled: true,
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_REMINDERS_ENABLED: {
      return {
        ...state,
        remindersEnabled: !!action.payload,
      };
    }

    case SET_POMODORO_ENABLED: {
      return {
        ...state,
        pomodoroEnabled: !!action.payload,
      };
    }

    case SET_GITHUB_ENABLED: {
      return {
        ...state,
        githubEnabled: !!action.payload,
      };
    }

    default:
      return state;
  }
}
