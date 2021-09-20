import { VFC } from 'react';
import TaskItem from '../taskItem/TaskItem';
import sampleData from './sampleData.json';
import styles from './TaskList.module.scss';

const TaskList: VFC = () => {
  return (
    <div className={styles.root}>
      {sampleData.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
