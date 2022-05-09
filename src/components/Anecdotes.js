import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { showNotification, hideNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anec, voting }) => (
  <div>
    <div>
      {anec.content}
    </div>
    <div>
      has {anec.votes}
      <button onClick={() => voting(anec)}>vote</button>
    </div>
  </div>
)

const Anecdotes = () => {

  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    return state.anecdotes.filter(anecdote => new RegExp(state.filter, 'i').test(anecdote.content))
  })

  const voting = (anec) => {
    dispatch(addVote(anec))
    dispatch(showNotification(`you voted '${anec.content}'`))
    setTimeout(() => dispatch(hideNotification()), 5000)
  }

  return (
    <>
      {anecdotes
        .slice()
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => <Anecdote key={anecdote.id} anec={anecdote} voting={voting}/>)}
    </>
  )
}

export default Anecdotes