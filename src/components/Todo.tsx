import React, { useState } from "react";

const Todo: React.FC<ITodoProps> = ({
  todo,
  setTodoList,
  selectedTodoId,
  setSelectedTodoId,
  handleToggle,
  handleUpdate,
  handleDelete,
}): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCheck = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedTodoId("");
    handleToggle(todo._id, setTodoList);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    handleUpdate(todo._id, e.target.value, setTodoList);
    setIsEditing(false);
  };

  return (
    <div className="container-sm">
      <div
        className={selectedTodoId === todo._id ? "card selected-card" : "card"}
        onClick={() => setSelectedTodoId(todo._id)}
      >
        <div className="form-check">
          <input
            id="flexCheckDefault"
            className="form-check-input"
            type="checkbox"
            value=""
            readOnly
            checked={todo.isComplete}
            onClick={handleCheck}
          />
          {!isEditing && (
            <p
              className={
                todo.isComplete && selectedTodoId === todo._id
                  ? "todo-p todo-p-completed"
                  : "todo-p"
              }
            >
              {todo.textBody}
            </p>
          )}
        </div>
        <div className="row">
          {isEditing && (
            <div className="col-11">
              <textarea
                className="todo-textarea"
                defaultValue={todo.textBody}
                autoFocus
                onBlur={handleBlur}
              />
            </div>
          )}
          <div className="col">
            {selectedTodoId === todo._id && (
              <div className="container action-btn-group">
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => setIsEditing(true)}
                >
                  <i
                    className={
                      selectedTodoId === todo._id
                        ? "bi bi-pencil-square selectable-icon selected-icon"
                        : "bi bi-pencil-square selectable-icon"
                    }
                  />
                </button>
                <button
                  className="action-btn"
                  type="button"
                  onClick={() => handleDelete(todo._id, setTodoList)}
                >
                  <i
                    className={
                      selectedTodoId === todo._id
                        ? "bi bi-trash-fill selectable-icon selected-icon"
                        : "bi bi-trash-fill selectable-icon"
                    }
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
