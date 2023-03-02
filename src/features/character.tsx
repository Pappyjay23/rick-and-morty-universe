import { createSlice } from '@reduxjs/toolkit'

const initialStateValue: string = ''

const characterSlice = createSlice({
    name: 'character', // This is the name of the state.
    initialState: { value: initialStateValue },
    reducers: {
        addResidentLocation: (state, action) => {
            state.value = action.payload
        },
    },
})

export const { addResidentLocation } = characterSlice.actions

export default characterSlice.reducer
