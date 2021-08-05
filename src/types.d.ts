interface ITodo {
  _id: string;
  textBody: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type TodoProps = {
  todo: ITodo;
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  handleToggle: (
    _id: string,
    isCompleted: boolean,
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
  handleUpdate: (
    _id: string,
    textBody: string,
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
  handleDelete: (
    _id: string,
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
};

type TodoFormProps = {
  handleSubmit: (
    e: React.FormEvent,
    formData: ITodo | {},
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

type TodoListProps = {
  todoList: ITodo[];
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  handleToggle: (
    _id: string,
    isCompleted: boolean,
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
  handleUpdate: (
    _id: string,
    textBody: string,
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
  handleDelete: (
    _id: string,
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
};

type ApiData = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
