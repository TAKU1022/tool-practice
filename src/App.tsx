import { VFC } from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import TaskForm from './components/taskForm/TaskForm';

const App: VFC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
      </div>
    </div>
  );
};

export default App;
