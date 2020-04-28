import {
  SET_INPUT_NAV,
} from './actions';

const initialState = {
  counter: 0,
  inputNav: '',
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_NAV: {
      return {
        ...state,
        inputNav: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
