import { useDispatch } from 'react-redux'
import { createNewAction } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {

  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdoteContent.value
    event.target.anecdoteContent.value = ''
    dispatch(createNewAction(content))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name="anecdoteContent" /></div>
        <button name="createAnecdote" type="submit">create</button>
      </form>
    </>
  )
}

export default NewAnecdote