// Actions
<<<<<<< HEAD
import { SET_MODEL_OPTIONS } from './actionTypes';
import { SET_VIN_DATA } from './actionTypes';
import { SET_HAS_IMAGES_STAGED } from './actionTypes';
import { RESET_ALERT, SET_MESSAGE } from './actionTypes';
import { SET_ZIP } from './actionTypes';
=======
import { SET_MODEL_OPTIONS } from "./actionTypes";
import { SET_VIN_DATA } from "./actionTypes";
import { SET_HAS_IMAGES_STAGED } from "./actionTypes";
import { RESET_ALERT, SET_MESSAGE } from "./actionTypes";
import { SET_SELLER_IMAGES } from "./actionTypes";
>>>>>>> b9b7124a1c22c881ac1acf1bb74ab66d34dbebf0

export const setModelOptions = (options) => {
  return {
    type: SET_MODEL_OPTIONS,
    payload: options,
  };
};

export const setVinData = (vinData) => {
  return {
    type: SET_VIN_DATA,
    payload: vinData,
  };
};

export const setHasImagesStaged = (bool) => {
  return {
    type: SET_HAS_IMAGES_STAGED,
    payload: bool,
  };
};

export const setAlertMessage = (message, variant) => {
  return {
    type: SET_MESSAGE,
    payload: { message, variant },
  };
};
export const resetAlert = () => {
  return {
    type: RESET_ALERT,
  };
};

export const setZipCode = (zip) => {
  return {
    type: SET_ZIP,
    payload: zip,
export const setSellerImages = (arr) => {
  return {
    type: SET_SELLER_IMAGES,
    payload: arr,
  };
};
