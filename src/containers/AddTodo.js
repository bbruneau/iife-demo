import React from 'preact-compat'
import { connect } from 'preact-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          {process.env.REACT_APP_ADD_TODO_TEXT}
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
