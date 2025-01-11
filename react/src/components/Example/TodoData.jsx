
const TodoData = (props) => {
  const { listTasks, deleteTask } = props;
  const handleClickDelete = (id) => {
    deleteTask(id);
  };

  return (
    <div className='todo-data'>
      {listTasks.map((task) => (
        <div className="todo-item" key={task.id}>
          <div>{task.name}</div>
          <button onClick={()=>handleClickDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoData;