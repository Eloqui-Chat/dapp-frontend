import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./reducers/home.reducer";

const rehydrateState = () => {
  const serializedState = localStorage.getItem("eloqui");
  if (serializedState !== null) {
    return JSON.parse(serializedState);
  }
};

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
  devTools: true,
  preloadedState: rehydrateState(),
  // middleware: [thunk, localStorageMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >
