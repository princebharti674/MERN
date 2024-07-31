import { createReducer } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";


// Actions
export const loginRequest = createAction("LOGIN_REQUEST");
export const loginSuccess = createAction("LOGIN_SUCCESS");
export const loginFail = createAction("LOGIN_FAIL");

export const registerRequest = createAction("REGISTER_REQUEST");
export const registerSuccess = createAction("REGISTER_SUCCESS");
export const registerFail = createAction("REGISTER_FAIL");

export const loadUserRequest = createAction("LOAD_USER_REQUEST");
export const loadUserSuccess = createAction("LOAD_USER_SUCCESS");
export const loadUserFail = createAction("LOAD_USER_FAIL");

// Reducers
const initialState = {
  isLoading: false,
  user: null,
  error: null,
  isAuthenticated: false,
};
export const loginReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(loginRequest, (state) => ({
      isLoading: true,
      error: null,
    }))
    .addCase(loginSuccess, (state, action) => ({
      isLoading: false,
      user: action.payload,
      error: null,
      isAuthenticated: true,
    }))
    .addCase(loginFail, (state, action) => ({
      isLoading: false,
      error: action.payload,
      isAuthenticated: false,
    }))
);

export const registerReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(registerRequest, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }))
    .addCase(registerSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      user: action.payload,
      error: null,
      isAuthenticated: true,
    }))
    .addCase(registerFail, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
      isAuthenticated: false,
    }))
);

export const loadUserReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(loadUserRequest, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    }))
    .addCase(loadUserSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      user: action.payload,
      error: null,
      isAuthenticated: true,
    }))
    .addCase(loadUserFail, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
      isAuthenticated: false,
    }))
);

const userReducer = {
  loginReducer,
  registerReducer,
  loadUserReducer,
};
export default userReducer;

