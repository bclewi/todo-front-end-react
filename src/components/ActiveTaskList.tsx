import Todo from "./Todo";

const ActiveTaskList: React.FC<TodoListProps> = ({
  todoList,
  setTodoList,
  handleToggle,
  handleUpdate,
  handleDelete,
}): JSX.Element => {
  return (
    <section className="container-fluid active-task-list">
      {todoList
        ? todoList.map((todo: ITodo) => {
            if (!todo.isCompleted) {
              return (
                <Todo
                  key={todo._id}
                  setTodoList={setTodoList}
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
