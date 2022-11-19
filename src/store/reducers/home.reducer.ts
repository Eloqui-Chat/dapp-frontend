import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  selectedTab: "",
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setSelectedTab: (state, action) => {
      localStorage.setItem(
        "eloqui",
        JSON.stringify({
          page: {
            selectedTab: action.payload,
          },
        })
      );

      return {
        ...state,
        selectedTab: action.payload,
      };
    },
  },
});

export const { setSelectedTab } = pageSlice.actions;
export default pageSlice.reducer;
