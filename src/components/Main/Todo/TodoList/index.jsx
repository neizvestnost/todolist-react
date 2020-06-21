import React, { Component } from 'react';
import DeleteButton from '../DeleteButton';
import { connect } from 'react-redux';
import { selectTodo, changeTodoText } from '../../../../actions/todos'

class TodoList extends Component {
  render() {
    const { todoList, type } = this.props
    const types = { active: this.activeTodos(), completed: this.completedTodos(), all: todoList }

    const todos = types[type].map(element => {
      return (
        <li key={element.position}>
          <input type='checkbox' checked={!element.active} onChange={() => this.handleCheckClick(element.active, element.position)} />
          <input value={element.text} onChange={event => this.handleTextChange(element.position, event.target.value)} />
          <DeleteButton position={element.position} buttonText={'X'} />
        </li>
      )
    })

    return (
      <ul>
        {todos}
      </ul>
    )
  }

  activeTodos = () => this.props.todoList.filter(todo => todo.active)
  completedTodos = () => this.props.todoList.filter(todo => !todo.active)

  handleTextChange = (position, text) => {
    const newTodoList = this.props.todoList.map(todo => {
      return todo.position === position ? { ...todo, text } : todo
    })

    this.props.changeTodoText(newTodoList)
  }

  handleCheckClick = (active, position) => {
    const newTodoList = this.props.todoList.map(todo => {
      return todo.position === position ? { ...todo, position: position, active: !active } : todo
    })

    this.props.selectTodo(newTodoList);
  }
}

const mapStateToProps = state => {
  return { todoList: state.todos.todoList }
}

const mapDispatchToProps = {
  selectTodo,
  changeTodoText
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)