import {
  addPremiumBooksType,
  addFreeBooksType,
  searchPremiumBooksType,
  searchFreeBooksType,
} from '../actions/actionType';

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
    case addPremiumBooksType:
      return {
        ...prevState,
        booksPremium: action.value,
      };
    case addFreeBooksType:
      return {
        ...prevState,
        booksFree: action.value,
      };
    case searchPremiumBooksType:
      return {
        ...prevState,
        searchResult: {
          bookPremium: action.value,
          bookFree: prevState.searchResult.bookFree
        },
      };
    case searchFreeBooksType:
      return {
        ...prevState,
        searchResult: {
          bookFree: action.value,
          bookPremium: prevState.searchResult.bookPremium
        },
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default book;
