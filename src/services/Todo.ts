import * as dao from "../dao/MongoDbDao";

const fetchTodos = async (
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): Promise<void> => {
  try {
    const allTodos = await dao.readAllTodos();
    if (allTodos) setTodoList(allTodos);
  } catch (err) {
    console.log(err);
  }
};

const handleSubmit = async (
  e: React.FormEvent,
  formData: ITodo | {},
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): Promise<void> => {
  try {
    e.preventDefault();
    const { status, data } = await dao.createTodo(formData);
    if (status !== 201) throw new Error("Error! Todo not saved");
    setTodoList(data.todos);
  } catch (err) {
    console.log(err);
  }
};

const handleToggle = async (
  id: string,
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): Promise<void> => {
  try {
    const { status, data } = await dao.toggleCheckbox(id);
    if (status !== 200) throw new Error("Error! Todo not updated");
    setTodoList(data.todos);
  } catch (err) {
    console.log(err);
  }
};

const handleUpdate = async (
  id: string,
  textBody: string,
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): Promise<void> => {
  try {
    const { status, data } = await dao.updateTodo(id, textBody);
    if (status !== 200) throw new Error("Error! Todo not updated");
    setTodoList(data.todos);
  } catch (err) {
    console.log(err);
  }
};

const handleDelete = async (
  id: string,
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
): Promise<void> => {
  try {
    const { status, data } = await dao.deleteTodo(id);
    if (status !== 200) throw new Error("Error! Todo not deleted");
    setTodoList(data.todos);
  } catch (err) {
    console.log(err);
  }
};

export { fetchTodos, handleSubmit, handleToggle, handleUpdate, handleDelete };
