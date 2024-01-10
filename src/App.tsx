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
        <textarea name="" id="" cols={30} rows={30}></textarea>
        <button>button</button>
        <div
          style={{
            width: "500px",
            height: "150px",
            border: "1px solid red",
            margin: "20px",
          }}
        ></div>
      </div>
    </Cursors>
  );
}

export default App;
