import {addAuthType, removeAuthType} from './actionType';

export const addAuthCreator = (body) => {
  return {
    type: addAuthType,
    value: body,
  };
};

export const removeAuthCreator = () => {
  return {
    type: removeAuthType,
  };
};
