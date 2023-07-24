import PropTypes from 'prop-types'
import { List } from '@mui/material'
import TodoItem from './TodoItem'

const TodoList = ({ todos, changeDone, removeTodoById }) => {
  return (
    <List>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeDone={changeDone}
            removeTodoById={removeTodoById}
          />
        )
      })}
    </List>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  changeDone: PropTypes.func.isRequired,
  removeTodoById: PropTypes.func.isRequired,
}
export default TodoList
