// Actions
import { SET_MODEL_OPTIONS } from './actionTypes';

export const setModelOptions = (options) => {
  console.log('options', options);
  console.log({SET_MODEL_OPTIONS});
  return {
    type: SET_MODEL_OPTIONS,
    payload: options,
  };
};
