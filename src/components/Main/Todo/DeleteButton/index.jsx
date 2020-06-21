import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteCompletedTodos, deleteTodo } from '../../../../actions/todos';

class DeleteButton extends Component {
  render() {
    const button = this.props.position ? <button onClick={this.handleClickDelete}>{this.props.buttonText}</button> : <button onClick={this.deleteCompleted}>{this.props.buttonText}</button>

    return button
  }

  handleClickDelete = () => {
    const newTodoList = this.props.todoList.filter(todo => todo.position !== this.props.position)

    this.props.deleteTodo(newTodoList)
  }

  deleteCompleted = () => {
    const { todoList, deleteCompletedTodos } = this.props

    deleteCompletedTodos(todoList.filter(todo => todo.active))
  }
}

const mapStateToProps = state => ({ todoList: state.todos.todoList })

const mapDispatchToProps = {
  deleteCompletedTodos,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteButton)
