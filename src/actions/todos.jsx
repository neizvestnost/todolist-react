export const ADD_TODO               = 'ADD_TODO'
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS'
export const SELECT_TODO            = 'SELECT_TODO'
export const SELECT_ALL_TODOS       = 'SELECT_ALL_TODOS'
export const DELETE_TODO            = 'DELETE_TODO'
export const CHANGE_TODO_TEXT       = 'CHANGE_TODO_TEXT'

export const addTodo = (text, position) => {
  return {
    type: ADD_TODO,
    payload: {
      text: text,
      position: position,
      active: true
    }
  }
}

export const deleteCompletedTodos = (todos) => {
  return {
    type: DELETE_COMPLETED_TODOS,
    payload: todos
  }
}

export const selectTodo = (todos) => {
  return {
    type: SELECT_TODO,
    payload: todos
  }
}

export const selectAllTodos = (todos) => {
  return {
    type: SELECT_ALL_TODOS,
    payload: todos
  }
}

export const deleteTodo = (todos) => {
  return {
    type: DELETE_TODO,
    payload: todos
  }
}

export const changeTodoText = (todos) => {
  return {
    type: CHANGE_TODO_TEXT,
    payload: todos
  }
}
