import { Checkbox } from '@material-ui/core';
import { Delete, Edit, EventNote } from '@material-ui/icons';
import { VFC } from 'react';
import styles from './TaskItem.module.scss';

type Props = {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
};

const TaskItem: VFC<Props> = (props: Props) => {
  const { task } = props;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNote />
        <div className={styles.title_text}>{task.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          className={styles.checkbox}
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
        />
        <button
          className={styles.edit_button}
          onClick={() => console.log(`check ${task.id}`)}
        >
          <Edit className={styles.icon} />
        </button>
        <button
          className={styles.delete_button}
          onClick={() => console.log(`check ${task.id}`)}
        >
          <Delete className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
