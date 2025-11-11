import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  lastUpdate: null,
};

const choicesSlice = createSlice({
  name: 'choices',
  initialState,
  reducers: {
    toggleChoice: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.nome === item.nome);
      if (exists) {
        state.items = state.items.filter((i) => i.nome !== item.nome);
      } else {
        state.items.push(item);
      }
      state.lastUpdate = Date.now();
    },
    clearExpiredSession: (state) => {
      if (state.lastUpdate && Date.now() - state.lastUpdate > 30 * 60 * 1000) {
        // 30 minuti
        state.items = [];
        state.lastUpdate = null;
      }
    },
  },
});

export const { toggleChoice, clearExpiredSession } = choicesSlice.actions;
export default choicesSlice.reducer;
