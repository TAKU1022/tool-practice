import { VFC } from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';

const App: VFC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header></Header>
      </div>
    </div>
  );
};

export default App;
