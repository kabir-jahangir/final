import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './Slices/UserSlice'
import chatuserSlice from './Slices/ChatUserSlice'

export default configureStore({
  reducer: {
    currentUser : UserSlice,
    chatUser: chatuserSlice

  },
})