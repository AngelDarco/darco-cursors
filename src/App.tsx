import styles from "./App.module.css";
import Cursors from "./src/components/Cursors";
function App() {
  return (
    <Cursors>
      <h1 className={styles.title}>Cursors Working ...</h1>
      <div className={styles.mainContainer}>
        my container
        <input type="text" placeholder="Enter text" name="" id="" />
        <a href="">This is a link</a>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
        similique maxime eius repellendus nulla enim suscipit facilis, qui
        expedita ab, totam commodi quia. Accusamus explicabo quae sit eum
        possimus magnam.
        <a href="">this is the second link</a>
      </div>
    </Cursors>
  );
}

export default App;
