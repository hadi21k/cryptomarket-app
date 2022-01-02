import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: null,
  isSignedIn: false,
};
export const reducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.users = payload;
      state.isSignedIn = true;
    },
    signOutEmail: (state) => {
      state.users = null;
      state.isSignedIn = false;
    },
  },
});

export const { setUser, signOutEmail } = reducer.actions;
export default reducer.reducer;
