import styles from "./App.module.css";

// import Cursors from "./components/index";

import Cursors from "darco-cursors";

// import Cursors from "../dist/";

function App() {
  return (
    <Cursors type="blue" className={styles.mainContainer}>
      <h1 className={styles.title}>My awesome cursors ...</h1>
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
