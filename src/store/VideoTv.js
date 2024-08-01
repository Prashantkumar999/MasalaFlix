import { createSlice } from "@reduxjs/toolkit";
import { BiExport } from "react-icons/bi";


const initialState = {
    bannerData: [],
    imageUrl: ""
}


export const videoTv = createSlice({
    name: 'videoTv',
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },
        setImageUrl: (state, action) => {
            state.imageUrl = action.payload
        }
    }
})

export const { setBannerData, setImageUrl } = videoTv.actions
export default videoTv.reducer