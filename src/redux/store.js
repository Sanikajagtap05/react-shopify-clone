import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice"; // adjust the path if needed

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});