import PropTypes from 'prop-types'
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

const TodoItem = ({ todo, changeDone, removeTodoById }) => {
  const handleDelete = (e, id) => {
    e.stopPropagation()

    removeTodoById(id)
  }

  return (
    <ListItem>
      <ListItemButton sx={{ borderBottom: '1px solid gray' }} onClick={() => changeDone(todo.id)}>
        <ListItemIcon>
          <Checkbox edge="start" checked={todo.done} />
        </ListItemIcon>
        <ListItemText
          style={todo.done ? { textDecoration: 'line-through' } : null}
          sx={{ overflow: 'hidden' }}
        >
          {todo.body}
        </ListItemText>
        <IconButton edge="end" aria-label="comments" onClick={(e) => handleDelete(e, todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  changeDone: PropTypes.func.isRequired,
  removeTodoById: PropTypes.func.isRequired,
}
export default TodoItem
