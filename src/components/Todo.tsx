import React from "react";

const Todo: React.FC<TodoProps> = ({
  todo,
  setTodoList,
  handleToggle,
  handleUpdate,
  handleDelete,
}): JSX.Element => {
  return (
    <div className="container-sm">
      <div className="card">
        <div className="card-body">
          <div className="form-check">
            <input
              id="flexCheckDefault"
              className="form-check-input"
              type="checkbox"
              value=""
              readOnly
              checked={todo.isCompleted}
              onClick={(e) => {
                e.preventDefault();
                handleToggle(todo._id, todo.isCompleted, setTodoList);
              }}
            />
            <input
              className="todo-text-body"
              type="text"
              defaultValue={todo.textBody}
              onBlur={(e) => {
                handleUpdate(todo._id, e.target.value, setTodoList);
              }}
            />
            <button className="action-btn" type="button">
              <i className="bi bi-pencil-square"></i>
            </button>

            <button
              className="action-btn"
              type="button"
              onClick={() => {
                handleDelete(todo._id, setTodoList);
              }}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
