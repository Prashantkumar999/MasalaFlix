import { configureStore } from '@reduxjs/toolkit'
import videoTvReducer from './VideoTv'

export const store = configureStore({
  reducer: {
    movieData: videoTvReducer
  },
})