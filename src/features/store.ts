import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import columnsReducer from './columnsSlice';



const store = configureStore({
  reducer: 
  {
    tasks: taskReducer,
    columns: columnsReducer
  }
});

export default store;