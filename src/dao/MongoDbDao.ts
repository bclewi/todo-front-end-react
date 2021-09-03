import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const createTodo = async (formData: ITodo | {}): Promise<any> => {
  const data: Pick<ITodo, "textBody"> = {
    textBody: (formData as ITodo).textBody,
  };
  try {
    const newTodo: AxiosResponse<ApiData> = await axios.post(
      `${baseUrl}/todos`,
      data
    );
    return newTodo;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const readAllTodos = async (): Promise<ITodo[]> => {
  try {
    const axiosRes: AxiosResponse<ApiData> = await axios.get(
      `${baseUrl}/todos`
    );
    return axiosRes.data.todos;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const toggleCheckbox = async (
  id: string
): Promise<AxiosResponse<ApiData>> => {
  try {
    const updatedTodo: AxiosResponse<ApiData> = await axios.put(
      `${baseUrl}/todos/${id}`
    );
    return updatedTodo;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const updateTodo = async (
  id: string,
  textBody: string
): Promise<AxiosResponse<ApiData>> => {
  try {
    const todoToUpdate: Pick<ITodo, "textBody"> = {
      textBody,
    };
    const updatedTodo: AxiosResponse<ApiData> = await axios.put(
      `${baseUrl}/todos/${id}`,
      todoToUpdate
    );
    return updatedTodo;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const deleteTodo = async (
  id: string
): Promise<AxiosResponse<ApiData>> => {
  try {
    const deletedTodo: AxiosResponse<ApiData> = await axios.delete(
      `${baseUrl}/todos/${id}`
    );
    return deletedTodo;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
