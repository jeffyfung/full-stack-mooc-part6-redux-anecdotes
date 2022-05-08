import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'

const Anecdote = ({ anec, voting }) => (
  <div>
    <div>
      {anec.content}
    </div>
    <div>
      has {anec.votes}
      <button onClick={() => voting(anec.id)}>vote</button>
    </div>
  </div>
)

const Anecdotes = () => {

  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAction(id))
  }

  return (
    <>
      {anecdotes
        .sort((a, b) => a.votes > b.votes)
        .map(anecdote => <Anecdote key={anecdote.id} anec={anecdote} voting={vote}/>)}
    </>
  )
}

export default Anecdotes