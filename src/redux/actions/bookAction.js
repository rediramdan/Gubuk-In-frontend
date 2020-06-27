import {addBooksType} from './actionType';

export const addBooksCreator = (body) => {
  return {
    type: addBooksType,
    value: body,
  };
};
