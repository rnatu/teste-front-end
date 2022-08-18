import { Header } from './components/Header';
import { MainSlider } from './components/MainSlider';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <MainSlider />
    </div>
  );
}

export default App;
