import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import {
  createTodo,
  readAllTodos,
  toggleCheckbox,
  updateTodo,
  deleteTodo,
} from "./Api";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    readAllTodos()
      .then((allTodos) => {
        if (allTodos) {
          setTodoList(allTodos);
        }
      })
      .catch((err: Error) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    createTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
        setTodoList(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleToggle = (_id: string, isCompleted: boolean): void => {
    toggleCheckbox(_id, isCompleted)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodoList(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleUpdate = (_id: string, textBody: string): void => {
    updateTodo(_id, textBody)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodoList(data.todos);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setTodoList(data.todos);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className="container-fluid">
      <div className="scroll">
        {todoList
          ? todoList.map((todo: ITodo) => {
              if (!todo.isCompleted) {
                return (
                  <Todo
                    key={todo._id}
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
        <div className="accordion accordion-flush" id="completedTasksAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className={
                  "accordion-button" + (isCollapsed ? " collapsed" : "")
                }
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                onClick={() => {
                  setIsCollapsed((prevState) => !prevState);
                }}
              >
                Completed
              </button>
            </h2>
            <div
              id="collapseOne"
              className={
                "accordion-collapse" + (isCollapsed ? " collapse" : "")
              }
              aria-labelledby="headingOne"
              data-bs-parent="#completedTasksAccordion"
            >
              <div className="accordion-body">
                {todoList
                  ? todoList.map((todo: ITodo) => {
                      if (todo.isCompleted) {
                        return (
                          <Todo
                            key={todo._id}
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <TodoForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default App;
