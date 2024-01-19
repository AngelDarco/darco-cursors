import styles from "./App.module.css";

import Cursors, { CursorsStyles } from "./components/index";

function App() {
  return (
    <Cursors type="pink" className={styles.mainContainer}>
      <h1 className={styles.title}>My awesome cursors ...</h1>
      <button className={CursorsStyles.text}>Button with text cursor</button>
      <textarea
        cols={30}
        rows={10}
        placeholder="This is a textarea with text cursor"
      ></textarea>
      <a href="#"> Link with pointer cursor</a>
      <a href="#">Link with pointer cursor</a>
      <a href="#">Link with pointer cursor</a>
    </Cursors>
  );
}

export default App;
