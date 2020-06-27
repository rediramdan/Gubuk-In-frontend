import {addBooksType} from '../actions/actionType';

const initialValue = {
  booksFree: [],
  booksPremium: [],
  searchResult: {
    bookFree: [],
    bookPremium: [],
  },
};

const book = (prevState = initialValue, action) => {
  switch (action.type) {
    case addBooksType:
      return {
        ...prevState,
        booksPremium: action.value,
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default book;
