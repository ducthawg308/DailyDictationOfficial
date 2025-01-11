import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState('');
  const {addTask} = props;
  const handleAddNewTodo = () => {
    if (valueInput.trim() !== '') {
      addTask(valueInput);
      setValueInput('');
    }
  }

  const handelOnChange = (task) => {
    setValueInput(task);
  }
    
    return (
        <div className='todo-new'>
          <input onChange={(event) => handelOnChange(event.target.value)} type="text" value={valueInput} placeholder="Add a new task" />
          <button onClick={handleAddNewTodo}>Add</button>
        </div>
    );
}

export default TodoNew;