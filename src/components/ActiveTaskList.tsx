import Todo from "./Todo";

const ActiveTaskList: React.FC<ITodoListProps> = ({
  todoList,
  setTodoList,
  selectedTodoId,
  setSelectedTodoId,
  handleToggle,
  handleUpdate,
  handleDelete,
}): JSX.Element => {
  return (
    <section className="col-sm-6 active-task-list">
      {todoList
        ? todoList.map((todo: ITodo) => {
            if (!todo.isComplete) {
              return (
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
              );
            } else {
              return null;
            }
          })
        : null}
    </section>
  );
};

export default ActiveTaskList;
