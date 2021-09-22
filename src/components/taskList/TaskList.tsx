import { VFC } from 'react';
import { useSelector } from 'react-redux';
import { selectTask } from '../../features/task/taskSlice';
import TaskItem from '../taskItem/TaskItem';
import styles from './TaskList.module.scss';

const TaskList: VFC = () => {
  const tasks = useSelector(selectTask);

  return (
    <div className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
