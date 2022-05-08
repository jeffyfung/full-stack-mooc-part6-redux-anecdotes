import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
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

  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const voting = ({ id, content }) => {
    dispatch(vote(id))
    dispatch(showNotification(`you voted '${content}'`))
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