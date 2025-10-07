import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const theme_Slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // toggle_theme: (state) => {
    //   state.theme = state.theme!;
    // },
  },
});


// export const {} = theme_Slice.actions

export default theme_Slice.reducer
