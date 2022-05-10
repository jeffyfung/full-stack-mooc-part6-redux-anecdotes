import { createSlice } from '@reduxjs/toolkit'

let timeoutId;

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    showNotification(state, action) {
      return action.payload
    },
    hideNotification(state, action) {
      return ''
    }
  }
})

export const { showNotification, hideNotification } = notificationSlice.actions

export const setNotification = (content, timeout) => {
  return async dispatch => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    dispatch(showNotification(content))
    timeoutId = setTimeout(() => dispatch(hideNotification()), timeout)
  }
}

export default notificationSlice.reducer