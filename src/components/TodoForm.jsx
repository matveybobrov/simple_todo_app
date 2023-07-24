import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

const TodoForm = ({ addTodo }) => {
  const handleKeyDown = (e) => {
    if (e.key !== 'Enter' || e.target.value === '') return

    const todo = {
      id: Date.now(),
      body: e.target.value,
      done: false,
    }

    addTodo(todo)
    e.target.value = ''
  }

  return (
    <TextField
      size="small"
      sx={{ width: '100%', marginTop: '10px' }}
      label="Add new"
      type="text"
      onKeyDown={handleKeyDown}
    />
  )
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}
export default TodoForm
