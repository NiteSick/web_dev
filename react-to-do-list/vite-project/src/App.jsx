import { useState } from 'react'



function App() {
  const[newItem,setNewItem] =  useState("")
  const[todos, setNewTodos] = useState("")
  function handleSubmit(e){
      e.preventDefault();
  }
  return(
    <>
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <label htmlFor='item'>New item</label>
        <input value={newItem}
         type="text" 
         id='item'
         onChange={e=>setNewItem(e.target.value)}/>
      </div>
      <button className='btn'>
        Add
      </button>
    </form>
    <h1 className='header'>Todo List</h1>
    <ul className='list'>
      <li>
        <label htmlFor="">
          <input type="checkbox" />Item1
        </label>
        <button className='btn btn-danger'>Delete</button>
      </li>
    </ul>
    </>
  )
}

export default App
