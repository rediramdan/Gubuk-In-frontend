import {addAuthType, removeAuthType} from '../actions/actionType';

const initialValue = {
  isLogin: false,
  token: '',
  refreshtoken: '',
  email: '',
  user: {},
};

const book = (prevState = initialValue, action) => {
  switch (action.type) {
    case addAuthType:
      return {
        ...prevState,
        isLogin: true,
        token: action.value.token,
        refreshtoken: action.value.refreshtoken,
        email: action.value.email,
        user: action.value.user,
      };
    case removeAuthType:
      return {
        ...prevState,
        isLogin: false,
        token: '',
        refreshtoken: '',
        email: '',
        user: {},
      };
    default:
      return {
        ...prevState,
      };
  }
};

export default book;
