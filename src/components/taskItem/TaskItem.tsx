import { Checkbox } from '@material-ui/core';
import { EventNote } from '@material-ui/icons';
import { VFC } from 'react';
import styles from './TaskItem.module.scss';

type Props = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskItem: VFC<Props> = (props: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNote />
        <div className={styles.title_text}>{props.title}</div>
      </div>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
};

export default TaskItem;
