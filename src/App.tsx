import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ActiveTaskList from "./components/ActiveTaskList";
import CompletedTaskList from "./components/CompletedTaskList";
import TodoForm from "./components/TodoForm";
import {
  fetchTodos,
  handleToggle,
  handleUpdate,
  handleDelete,
  handleSubmit,
} from "./services/Todo";

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [selectedTodoId, setSelectedTodoId] = useState<string>("");

  useEffect(() => {
    fetchTodos(setTodoList);
  }, []);

  return (
    <div id="app" className="container-fluid">
      <Header />
      <main className="container-fluid">
        <div className="row">
          <ActiveTaskList
            todoList={todoList}
            setTodoList={setTodoList}
            selectedTodoId={selectedTodoId}
            setSelectedTodoId={setSelectedTodoId}
            handleToggle={handleToggle}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
          <CompletedTaskList
            todoList={todoList}
            setTodoList={setTodoList}
            selectedTodoId={selectedTodoId}
            setSelectedTodoId={setSelectedTodoId}
            handleToggle={handleToggle}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </div>
      </main>
      <TodoForm handleSubmit={handleSubmit} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
