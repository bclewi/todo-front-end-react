import { useState } from "react";
import classNames from "classnames";
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
    todoList.forEach((todo) => {
      if (todo.isComplete) return true;
    });
    return false;
  };

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  const accordionButtonClass = classNames("accordion-button", {
    collapsed: isCollapsed,
  });

  const collapseOneClass = classNames("accordion-collapse", {
    collapse: isCollapsed,
  });

  return (
    <section className="col-sm-6 completed-tasks-section">
      {hasOneComplete() && (
        <div className="accordion accordion-flush" id="completedTasksAccordion">
          <div className="accordion-item">
            <div className="accordion-header" id="headingOne">
              <button
                className={accordionButtonClass}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                onClick={toggleCollapse}
              >
                Completed
              </button>
            </div>
            <div
              id="collapseOne"
              className={collapseOneClass}
              aria-labelledby="headingOne"
              data-bs-parent="#completedTasksAccordion"
            >
              <div className="accordion-body">
                {todoList &&
                  todoList.map(
                    (todo: ITodo) =>
                      todo.isComplete && (
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
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CompletedTaskList;
