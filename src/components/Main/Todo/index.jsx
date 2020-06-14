import React, { Component } from 'react';
import TodoList from './TodoList';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class Todo extends Component {
  state = {
    inputValue: '',
    position: 1,
    todoList: [],
    selectAllChecked: false
  }

  render() {
    const { todoList, inputValue, selectAllChecked } = this.state;
    const activeTodosLength = todoList.filter(todo => todo.active).length
    const completedTodos = todoList.filter(todo => !todo.active)
    const todoListLength = todoList.length

    return (
      <Router>
        <>
          <div>
            <header>todos</header>
            <input placeholder='What needs to be done' value={inputValue} onKeyPress={this.keyPressHandle} onChange={this.handleOnChange} />
            {todoListLength ? <input type='checkbox' checked={selectAllChecked} onChange={this.handleSelectAll} /> : ''}
          </div>
          <section>
            <Route exact path='/' render={props => this.allTodos(props)} />
            <Route path='/active' render={props => this.activeTodos(props)} />
            <Route path='/complete' render={props => this.completeTodos(props)} />
          </section>
          {todoListLength ?
            <Footer
              itemsLeft={activeTodosLength}
              todoListLength={todoListLength}
              deleteCompleted={this.deleteCompleted}
              completedTodos={completedTodos}
            /> : ''}
        </>
      </Router>
    )
  }

  deleteCompleted = idsToDelete => {
    this.setState(prevState => {
      const newTodoList = prevState.todoList.filter(todo => !idsToDelete.includes(todo.position))
      return (
        {
          todoList: newTodoList
        }
      )
    })
  }

  handleSelectAll = () => {
    this.setState(prevState => {
      const selectedTodos = prevState.todoList.map(todo => {
        prevState.selectAllChecked ? todo.active = true : todo.active = false
        return todo
      })

      return (
        {
          selectAllChecked: !prevState.selectAllChecked,
          todoList: selectedTodos
        }
      )
    })
  }

  activeTodos = props => {
    const activeTodos = this.state.todoList.filter(todo => todo.active)

    return (
      <TodoList
        {...props}
        data={activeTodos}
        handleTextChange={this.handleTodoTextChange}
        handleActiveClick={this.handleActiveClick}
        handleCancelClick={this.handleCancelClick}
      />
    )
  }

  allTodos = props => (
    <TodoList
      {...props}
      data={this.state.todoList}
      handleTextChange={this.handleTodoTextChange}
      handleActiveClick={this.handleActiveClick}
      handleCancelClick={this.handleCancelClick}
    />
  )

  completeTodos = props => {
    const completeTodos = this.state.todoList.filter(todo => !todo.active)

    return (
      <TodoList
        {...props}
        data={completeTodos}
        handleTextChange={this.handleTodoTextChange}
        handleActiveClick={this.handleActiveClick}
        handleCancelClick={this.handleCancelClick}
      />
    )
  }

  handleTodoTextChange = (position, text) => {
    this.setState(prevState => {
      const newTodoList = prevState.todoList.map(todo => {
        if (todo.position === position) {
          return (
            {
              text: text,
              position: todo.position,
              active: todo.active
            }
          )
        }

        return todo
      })

      return (
        {
          todoList: newTodoList
        }
      )
    })
  }

  keyPressHandle = event => {
    if (event.key === 'Enter' && this.state.inputValue.length) {
      this.setState(prevState => {
        return (
          {
            position: prevState.position + 1,
            todoList: prevState.todoList.concat(
              {
                text: this.state.inputValue,
                position: this.state.position,
                active: true
              }
            ),
            inputValue: '',
            selectAllChecked: false
          }
        )
      })
    }
  }

  handleActiveClick = (flag, position) => {
    this.setState(prevState => {
      const newTodoList = prevState.todoList.map(todo => {
        if (todo.position === position) {
          return (
            {
              text: todo.text,
              position: position,
              active: !flag
            }
          )
        }
        return todo;
      })

      return (
        {
          todoList: newTodoList
        }
      )
    })
  }

  handleCancelClick = position => {
    this.setState(prevState => {
      return (
        {
          todoList: prevState.todoList.filter(todo => todo.position !== position)
        }
      )
    })
  }

  handleOnChange = event => {
    return (
      this.setState({ inputValue: event.target.value })
    )
  }
}
