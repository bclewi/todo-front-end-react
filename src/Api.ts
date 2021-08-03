import axios, { AxiosResponse } from "axios";

const baseUrl: string = "http://localhost:4000";

export const createTodo = async (formData: ITodo): Promise<any> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      textBody: formData.textBody,
      isCompleted: false,
    };
    const newTodo: AxiosResponse<ApiData> = await axios.post(
      `${baseUrl}/todos`,
      todo
    );
    return newTodo;
  } catch (err) {
    throw new Error(err);
  }
};

export const readAllTodos = async (): Promise<ITodo[]> => {
  try {
    const axiosRes: AxiosResponse<ApiData> = await axios.get(
      `${baseUrl}/todos`
    );
    return axiosRes.data.todos;
  } catch (err) {
    throw new Error(err);
  }
};

export const toggleCheckbox = async (
  _id: string,
  isCompleted: boolean
): Promise<AxiosResponse<ApiData>> => {
  try {
    const todoToUpdate: Pick<ITodo, "isCompleted"> = {
      isCompleted: isCompleted ? false : true,
    };
    const updatedTodo: AxiosResponse<ApiData> = await axios.put(
      `${baseUrl}/todos/${_id}`,
      todoToUpdate
    );
    return updatedTodo;
  } catch (err) {
    throw new Error(err);
  }
};

export const updateTodo = async (
  _id: string,
  textBody: string
): Promise<AxiosResponse<ApiData>> => {
  try {
    const todoToUpdate: Pick<ITodo, "textBody"> = {
      textBody,
    };
    const updatedTodo: AxiosResponse<ApiData> = await axios.put(
      `${baseUrl}/todos/${_id}`,
      todoToUpdate
    );
    return updatedTodo;
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiData>> => {
  try {
    const deletedTodo: AxiosResponse<ApiData> = await axios.delete(
      `${baseUrl}/todos/${_id}`
    );
    return deletedTodo;
  } catch (err) {
    throw new Error(err);
  }
};
