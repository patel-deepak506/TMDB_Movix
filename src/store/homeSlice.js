import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
  name: 'home',
  initialState:{
    url:{name:"jsDev"},
    genres:{}
  },
  reducers: {
    getApiConfiguration:(state, action)=>{
        state.url = action.payload
    },    
    getGenres:(state, action)=>{
        state.genres = action.payload
    }
  },
})

export const { getApiConfiguration, getGenres } = counterSlice.actions
export default counterSlice.reducer