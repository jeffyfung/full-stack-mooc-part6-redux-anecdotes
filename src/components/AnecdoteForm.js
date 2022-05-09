import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

  const dispatch = useDispatch()

  const submitCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteContent.value
    event.target.anecdoteContent.value = ''
    dispatch(createAnecdote(content))
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