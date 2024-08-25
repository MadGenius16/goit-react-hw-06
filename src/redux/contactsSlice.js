import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
},

reducers: {
  addContact: (state, action) => {
    state.contact.push(action.payload);
  },

  deleteContact : (state, action) => {
    state.contact = state.contact.filter(
      (contact) => contact.id !== action.payload
    );
  },
}
})

export const contactsReducer = contactsSlice.reducer;
export const {addContact, deleteContact} = contactsSlice.actions;