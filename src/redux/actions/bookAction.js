import {
  addPremiumBooksType,
  addFreeBooksType,
  addBooksType,
  searchFreeBooksType,
  searchPremiumBooksType,
} from './actionType';

export const addPremiumBooksCreator = (body) => {
  return {
    type: addPremiumBooksType,
    value: body,
  };
};

export const addFreeBooksCreator = (body) => {
  return {
    type: addFreeBooksType,
    value: body,
  };
};


export const searchPremiumBooksCreator = (body) => {
  return {
    type: searchPremiumBooksType,
    value: body,
  };
};

export const searchFreeBooksCreator = (body) => {
  return {
    type: searchFreeBooksType,
    value: body,
  };
};


export const  addBooksCreator = (body) => {
  return {
    type:  addBooksType,
    value: body,
  };
};


