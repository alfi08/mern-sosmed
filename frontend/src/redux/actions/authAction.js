import * as types from "../types/authTypes";
import { LoginAPI, autoLoginAPI, RegisterAPI } from "../api/authApi";

export const loginAction = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    const response = await LoginAPI(username, password);
    localStorage.setItem("token", response.token);
    dispatch({ type: types.LOGIN_SUCCESS, payload: response.token });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAIL, payload: error?.response?.data });
  }
};

export const autoLoginAction = (token) => async (dispatch) => {
  console.log("[autoLoginAction]");
  try {
    dispatch({ type: types.AUTOLOGIN_REQUEST });
    const response = await autoLoginAPI(token);
    localStorage.setItem("token", token);
    dispatch({ type: types.AUTOLOGIN_SUCCESS, payload: token });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({ type: types.AUTOLOGIN_FAIL, payload: error?.response?.data });
  }
};

export const registerAction = (username, email, fullname, password) => async (
  dispatch
) => {
  console.log("[RegisterAction]");
  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const response = await RegisterAPI(username, email, fullname, password);
    localStorage.setItem("token", response.token);
    dispatch({ type: types.REGISTER_SUCCESS, payload: response.token });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch({ type: types.REGISTER_FAIL, payload: error?.response?.data });
  }
};

export const logoutAction = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: types.LOGOUT_SUCCESS });
};
