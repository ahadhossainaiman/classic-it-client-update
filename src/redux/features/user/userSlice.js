import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo_url: "",
  isLoading: true,
  isError: false,
  error: "",
};

export const loginUser = createAsyncThunk(
  "userSlice/currentUser",
  async ({ email, username, photoUrl }, { dispatch }) => {
    // const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(email, username, photoUrl);
    return {
      email: email,
      name: username,
      photo_url: photoUrl,
    };
  }
);

const userSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(state);
      (state.name = action.payload?.username),
        (state.email = action.payload?.email),
        (state.photo_url = action.payload?.photoUrl);
    },
    logOut: (state) => {
      (state.name = ""), (state.email = "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        (state.name = ""),
          (state.email = ""),
          (state.photo_url = ""),
          (state.error = "");
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isError = false;
        (state.name = action.payload.name),
          (state.email = action.payload.email),
          (state.photo_url = action.payload.photoURL),
          (state.error = "");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.name = "";
        state.email = "";
        (state.photo_url = ""), (state.error = action.error.message);
      });
  },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
