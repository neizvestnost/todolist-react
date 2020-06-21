import React, { Component } from 'react';
import Footer from './Footer';
import { Route } from "react-router-dom";
import { connect } from 'react-redux'
import { addTodo, selectAllTodos } from '../../../actions/todos'
import TodoList from './TodoList'

class Todo extends Component {
  state = {
    inputValue: '',
    position: 1,
    selectAllChecked: false
  }

  render() {
    const { todoList } = this.props;
    const { inputValue, selectAllChecked } = this.state;
    const activeTodosLength = todoList.filter(todo => todo.active).length
    const completedTodos = todoList.filter(todo => !todo.active)
    const todoListLength = todoList.length

    return (
      <>
        <div>
          <header>todos</header>
          <input placeholder='What needs to be done' value={inputValue} onKeyPress={e => this.keyPressHandle(e, this.props.addTodo)} onChange={this.handleOnChange} />
          {todoListLength ? <input type='checkbox' checked={selectAllChecked} onChange={this.handleSelectAll} /> : ''}
        </div>
        <section>
          <Route exact path='/todo' render={props => this.allTodos(props)} />
          <Route path='/todo/active' render={props => this.activeTodos(props)} />
          <Route path='/todo/complete' render={props => this.completedTodos(props)} />
        </section>
        {todoListLength ?
          <Footer
            itemsLeft={activeTodosLength}
            todoListLength={todoListLength}
            deleteCompleted={this.deleteCompleted}
            completedTodos={completedTodos}
          /> : ''}
      </>
    )
  }

  allTodos = props => <TodoList {...props} type={'all'} />
  activeTodos = props => <TodoList {...props} type={'active'} />
  completedTodos = props => <TodoList {...props} type={'completed'} />


  deleteCompleted = idsToDelete => {
    this.setState(prevState => {
      const newTodoList = prevState.todoList.filter(todo => !idsToDelete.includes(todo.position))
      return { todoList: newTodoList }
    })
  }

  handleSelectAll = () => {
    this.setState(prevState => {
      return { selectAllChecked: !prevState.selectAllChecked }
    })

    const { todoList, selectAllTodos } = this.props

    const selectedTodos = todoList.map(todo => {
      return this.state.selectAllChecked ? { ...todo, active: true } : { ...todo, active: false }
    })

    selectAllTodos(selectedTodos)
  }

  keyPressHandle = (event, creator) => {
    if (event.key === 'Enter' && this.state.inputValue.length) {
      this.setState(prevState => {
        return {
          inputValue: '',
          position: prevState.position + 1,
          selectAllChecked: false
        }
      })

      return creator(this.state.inputValue, this.state.position)
    }
  }

  handleOnChange = event => this.setState({ inputValue: event.target.value })
}

const mapDispatchToProps = {
  addTodo,
  selectAllTodos
}

const mapStateToProps = state => {
  return {
    todoList: state.todos.todoList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
