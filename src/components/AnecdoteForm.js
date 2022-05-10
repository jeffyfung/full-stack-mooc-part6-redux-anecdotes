// import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = ({ createAnecdote }) => {

  // const dispatch = useDispatch()

  const submitCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdoteContent.value
    event.target.anecdoteContent.value = ''
    createAnecdote(content)
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

const mapDispatchToProps = {
  createAnecdote
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)