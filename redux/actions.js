// Actions
import { SET_MODEL_OPTIONS } from "./actionTypes";

export const setModelOptions = (options) => {
  return {
    type: SET_MODEL_OPTIONS,
    payload: options,
  };
};
