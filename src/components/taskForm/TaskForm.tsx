import { TextField } from '@material-ui/core';
import { VFC } from 'react';
import { useForm } from 'react-hook-form';
import styles from './TaskForm.module.scss';

type Inputs = {
  taskTitle: string;
};

const TaskForm: VFC = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit(handleCreate)}>
        <TextField
          className={styles.text_field}
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          inputRef={register}
          name="taskTitle"
        />
      </form>
    </div>
  );
};

export default TaskForm;
