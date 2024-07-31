import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Reducers/User';







const store = configureStore({
    reducer: {
        userReducer,
        
    }
});
export default store;