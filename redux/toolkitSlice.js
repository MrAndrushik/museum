import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        isLoading: true,
        ticketIsOpen: false,
        sidebarIsOpen: false,
    },
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
        setTicketIsOpen(state, action) {
            state.ticketIsOpen = action.payload;
        },
        setSidebarIsOpen(state, action) {
            state.sidebarIsOpen = action.payload;
        },
    },
});

export default toolkitSlice.reducer;
export const { setIsLoading, setTicketIsOpen, setSidebarIsOpen } =
    toolkitSlice.actions;
