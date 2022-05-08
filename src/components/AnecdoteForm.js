import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const submitCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteContent.value
    event.target.anecdoteContent.value = ''
    let newAnecdote = await anecdotesService.createAnecdote(content)
    dispatch(createAnecdote(newAnecdote))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={submitCreate}>
        <div><input name="anecdoteContent" /></div>
        <button name="createAnecdote" type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm