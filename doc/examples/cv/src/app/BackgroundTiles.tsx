import styles from "./BackgroundTiles.module.css";

export default function BackgroundTiles() {
  console.log("BackgroundTiles");
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.backgroundTile}></div>
      <div className={styles.backgroundTileFlipped}></div>
      <div className={styles.backgroundTile}></div>
    </div>
  );
}
