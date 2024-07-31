import axios from "axios";
import {loginRequest, loginSuccess, loginFail} from "../Reducers/User";
axios.defaults.baseURL = 'http://localhost:3000';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: loginRequest,
    });
    const response = await axios.post("http://localhost:3000/api/v1/login", { email, password });
    
    dispatch({ 
        type: loginSuccess, 
        payload: response.user 
    });
  } catch (error) {
    dispatch({ 
        type: loginFail, 
        payload: error.message 
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const { data } = await axios.post("/api/v1/me");

    dispatch({ 
        type: "loadUserSuccess", 
        payload: data.user });
  } catch (error) {
    dispatch({ 
        type: "loadUserFail", 
        payload: error.message });
  }
}