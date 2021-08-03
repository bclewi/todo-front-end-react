interface ITodo {
  _id: string;
  textBody: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}

type TodoProps = {
  todo: ITodo;
  handleToggle: (_id: string, isCompleted: boolean) => void;
  handleUpdate: (_id: string, textBody: string) => void;
  handleDelete: (_id: string) => void;
};

type TodoFormProps = {
  handleSubmit: (e: React.FormEvent, formData: ITodo | any) => void;
};

type ApiData = {
  message: string;
  status: string;
  todos: ITodo[];
  todo?: ITodo;
};
