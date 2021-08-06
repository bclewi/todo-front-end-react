interface ITodo {
  _id: string;
  textBody: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface ITodoPropFunctions {
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
  selectedTodoId: any;
  setSelectedTodoId: React.Dispatch<React.SetStateAction<string>>;
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
}

interface ITodoProps extends ITodoPropFunctions {
  todo: ITodo;
}

interface ITodoListProps extends ITodoPropFunctions {
  todoList: ITodo[];
}

interface ITodoFormProps {
  handleSubmit: (
    e: React.FormEvent,
    formData: ITodo | {},
    setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>
  ) => void;
  setTodoList: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

type ApiData = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
