import * as types from "../types/authTypes";

const initialState = {
  token: null,
  loading: true,
  errMessage: null,
};

const authReducers = (state = initialState, action) => {
  // prettier-ignore
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, loading: true, errMessage: null, token: null };
    case types.LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload, errMessage: null };
    case types.LOGIN_FAIL:
      return { ...state, loading: false, errMessage: action.payload };
    case types.LOGOUT_SUCCESS:
      return {...state, errMessage: null, token: null}
    case types.AUTOLOGIN_REQUEST:
      return { ...state, loading: true, errMessage: null, token: null };
    case types.AUTOLOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload, errMessage: null };
    case types.AUTOLOGIN_FAIL:
      return { ...state, loading: false, errMessage: action.payload };
    case types.REGISTER_REQUEST:
      return { ...state, loading: true, errMessage: null, token: null };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false, token: action.payload, errMessage: null };
    case types.REGISTER_FAIL:
      return { ...state, loading: false, errMessage: action.payload };
    default:
      return state;
  }
};

export default authReducers;
