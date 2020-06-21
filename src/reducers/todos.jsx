import { ADD_TODO, DELETE_COMPLETED_TODOS, SELECT_TODO, SELECT_ALL_TODOS, DELETE_TODO, CHANGE_TODO_TEXT } from "../actions/todos"

const initialState = {
  todoList: []
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todoList: state.todoList.concat({
          text: action.payload.text,
          position: action.payload.position,
          active: action.payload.active
        })
      }
    case DELETE_COMPLETED_TODOS:
      return { todoList: action.payload }
    case SELECT_TODO:
      return { todoList: action.payload }
    case SELECT_ALL_TODOS:
      return { todoList: action.payload }
    case DELETE_TODO:
      return { todoList: action.payload }
    case CHANGE_TODO_TEXT:
      return { todoList: action.payload }
    default:
      return state
  }
}
