import axios from 'axios'

const baseurl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const res = await axios.get(baseurl)
  return res.data
}

const createAnecdote = async (content) => {
  const res = await axios.post(baseurl, { content, votes: 0 })
  return res.data
}

const addVote = async (anec) => {
  const res = await axios.put(`${baseurl}/${anec.id}`, { content: anec.content, votes: anec.votes + 1 })
  return res.data
}

export default { getAll, createAnecdote, addVote }