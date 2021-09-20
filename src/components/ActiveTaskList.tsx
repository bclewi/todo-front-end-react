import Todo from "./Todo";

const ActiveTaskList: React.FC<ITodoListProps> = ({
  todoList,
  setTodoList,
  selectedTodoId,
  setSelectedTodoId,
  handleToggle,
  handleUpdate,
  handleDelete,
}): JSX.Element => (
  <section className="col-sm-6 active-task-list">
    {todoList &&
      todoList.map(
        (todo: ITodo) =>
          !todo.isComplete && (
            <Todo
              key={todo._id}
              setTodoList={setTodoList}
              selectedTodoId={selectedTodoId}
              setSelectedTodoId={setSelectedTodoId}
              handleToggle={handleToggle}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              todo={todo}
            />
          )
      )}
  </section>
);

export default ActiveTaskList;
