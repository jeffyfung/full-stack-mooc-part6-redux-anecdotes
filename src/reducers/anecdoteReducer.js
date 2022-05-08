import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      return state.map(anecdote => anecdote.id === action.payload
        ? { ...anecdote, votes: anecdote.votes + 1 } 
        : anecdote )
    },
    createAnecdote(state, action) {
      return state.concat(action.payload)
    },
    initializeAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { vote, createAnecdote, initializeAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer