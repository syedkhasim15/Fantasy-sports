import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchPlayerList: {},
  selectTeam: [],
};

export const playerSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    setMatchPlayerList: (state, action) => {
      state.matchPlayerList = action.payload;
      // console.log(state.matchPlayerList);
    },
    addPlayer: (state, action) => {
      state.selectTeam = [...state.selectTeam, action.payload];
      // console.log(state.selectTeam);
    },
  },
});

export const { setMatchPlayerList, addPlayer } = playerSlice.actions;
export default playerSlice.reducer;
