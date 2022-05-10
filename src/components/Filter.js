// import { useDispatch } from 'react-redux'
import { applyFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = ({ applyFilter }) => {
  // const dispatch = useDispatch()

  const handleChange = (event) => {
    let filterValue = event.target.value
    // dispatch(applyFilter(filterValue))
    applyFilter(filterValue)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  applyFilter
}

export default connect(null, mapDispatchToProps)(Filter)