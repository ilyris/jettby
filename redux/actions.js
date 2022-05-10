// Actions
import {
  SET_MODEL_OPTIONS,
  SET_BUYING_OPTIONS,
  SET_SELLING_OPTIONS,
} from './actionTypes';

export const setModelOptions = (options) => {
  return {
    type: SET_MODEL_OPTIONS,
    payload: options,
  };
};

export const setBuyingOptions = (options) => {
  return {
    type: SET_BUYING_OPTIONS,
    payload: options,
  };
};

export const setSellingOptions = (options) => {
  return {
    type: SET_SELLING_OPTIONS,
    payload: options,
  };
};
