import {
  createTodo,
  readAllTodos,
  toggleCheckbox,
  updateTodo,
  deleteTodo,
} from "../dao/MongoDbDao";

const fetchTodos = (
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): void => {
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

const handleSubmit = (
  e: React.FormEvent,
  formData: ITodo | {},
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): void => {
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

const handleToggle = (
  id: string,
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): void => {
  toggleCheckbox(id)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error! Todo not updated");
      }
      setTodoList(data.todos);
    })
    .catch((err) => console.log(err));
};

const handleUpdate = (
  id: string,
  textBody: string,
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): void => {
  updateTodo(id, textBody)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error! Todo not updated");
      }
      setTodoList(data.todos);
    })
    .catch((err) => console.log(err));
};

const handleDelete = (
  id: string,
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): void => {
  deleteTodo(id)
    .then(({ status, data }) => {
      if (status !== 200) {
        throw new Error("Error! Todo not deleted");
      }
      setTodoList(data.todos);
    })
    .catch((err) => console.log(err));
};

export { fetchTodos, handleSubmit, handleToggle, handleUpdate, handleDelete };
