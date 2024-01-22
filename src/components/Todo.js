import { useState, useEffect } from 'react'
import { get } from '../lib/requests'
import { BaseUrl } from '../lib/config'

function Todo() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    async function fetchTodos() {
      const data = await get(BaseUrl)
      console.log(data.data)
      return setTodos(data.data)
    }
    fetchTodos()
  }, [])
  return (
    <>
     <h1>There are some cards which is fetch from an apis</h1>
      <div style={{ display: 'flex', flexWrap: "wrap", justifyContent:"center"}}>
        {todos.map(todo => (
          <div style={{ height: 200, width: 350, border: '1px solid red', margin:'5px' }} key={todo.id}>
            <h1>To Do List</h1>
            <h3>{todo.title}</h3>
            <p>{todo.userId}</p>
          </div>
        ))}

      </div>
    </>

  )
}

export default Todo
