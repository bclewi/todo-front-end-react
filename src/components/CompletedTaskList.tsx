import { useState } from "react";
import Todo from "./Todo";

const CompletedTaskList: React.FC<ITodoListProps> = ({
  todoList,
  setTodoList,
  selectedTodoId,
  setSelectedTodoId,
  handleToggle,
  handleUpdate,
  handleDelete,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  let hasOneComplete = (): boolean => {
    let result = false;
    todoList.forEach((todo) => {
      if (todo.isComplete) {
        result = true;
        return result;
      }
    });
    return result;
  };

  return (
    <section className="col-sm-6 completed-tasks-section">
      {hasOneComplete() ? (
        <div className="accordion accordion-flush" id="completedTasksAccordion">
          <div className="accordion-item">
            <div className="accordion-header" id="headingOne">
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
            </div>
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
                      if (todo.isComplete) {
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
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default CompletedTaskList;
