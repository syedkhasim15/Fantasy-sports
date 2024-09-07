import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  token: "",
  wallet: "",
  skillScore: -1,
  allUsers: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authorize: (state, action) => {
      const { id, name, token, wallet, skillScore } = action.payload;
      state.id = id;
      state.name = name;
      state.token = token;
      state.wallet = wallet;
      state.skillScore = skillScore;
      console.log(state);
    },
    getAllUsers: (state, action) => {
      state.allUsers = action.payload;
      console.log(state.allUsers);
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
      console.log("Wallet Updated, Amount: ", state.wallet);
    }
  },
});

export const { authorize, getAllUsers, setWallet } = authSlice.actions;
export default authSlice.reducer;