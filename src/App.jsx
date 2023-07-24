import { Box, Card, IconButton } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilter from './components/TodoFilter'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

const App = () => {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('all')
  const [isDark, setIsDark] = useState(false)

  const addTodo = (todo) => {
    setTodos(todos.concat(todo))
  }

  const toggleTodoStatus = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)))
  }

  const removeTodoById = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filterTodos = () => {
    switch (filter) {
      case 'all':
        return [...todos]
      case 'done':
        return todos.filter((todo) => todo.done)
      case 'undone':
        return todos.filter((todo) => !todo.done)
    }
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const filteredTodos = filterTodos()

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Card
        sx={{
          width: `700px`,
          minHeight: '100px',
          padding: '30px 0px 0px 0px',
          position: 'relative',
        }}
      >
        <IconButton
          edge="end"
          aria-label="comments"
          sx={{ position: `absolute`, right: '20px', top: '10px' }}
          onClick={toggleTheme}
        >
          {darkTheme ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        <Box sx={{ padding: '0px 30px' }}>
          <h1 style={{ textAlign: 'center' }}>THINGS TO DO</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={filteredTodos}
            changeDone={toggleTodoStatus}
            removeTodoById={removeTodoById}
          />
        </Box>
        {todos.length ? <TodoFilter filter={filter} setFilter={setFilter} /> : null}
      </Card>
    </ThemeProvider>
  )
}

export default App
