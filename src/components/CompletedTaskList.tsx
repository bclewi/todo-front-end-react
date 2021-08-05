import { useState } from "react";
import Todo from "./Todo";

const CompletedTaskList: React.FC<TodoListProps> = ({
  todoList,
  setTodoList,
  handleToggle,
  handleUpdate,
  handleDelete,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <section className="completed-tasks-section">
      <div className="accordion accordion-flush" id="completedTasksAccordion">
        <div className="accordion-item">
          <div className="accordion-header" id="headingOne">
            <button
              className={"accordion-button" + (isCollapsed ? " collapsed" : "")}
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
            className={"accordion-collapse" + (isCollapsed ? " collapse" : "")}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedTaskList;
