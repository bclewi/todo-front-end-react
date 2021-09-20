import React, { useState } from "react";

const TodoForm: React.FC<ITodoFormProps> = ({
  handleSubmit,
  setTodoList,
}): JSX.Element => {
  const [formData, setFormData] = useState<ITodo | {}>({});

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handlePostSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    setFormData({});
    e.currentTarget.getElementsByTagName("input")[0].value = "";
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, formData, setTodoList);
    handlePostSubmit(e);
  };

  return (
    <section className="container-fluid add-task-container">
      <form className="form add-task-form" onSubmit={handleSubmitForm}>
        <div className="input-group">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={formData === undefined}
          >
            <i className="bi bi-plus-lg"></i>
          </button>
          <input
            id="textBody"
            className="form-control"
            type="text"
            placeholder="Add a Task"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
