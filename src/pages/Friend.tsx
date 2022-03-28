import styles from "/src/ColorCard.module.css";
import styles2 from "/src/ColorBox.module.css";

const ColorCard = () => {
  return (
    // <div className={styles.card}>
    //   <div className={styles.card__content}>
    //   </div>
    //   <div className={styles.blob}></div>
    //   <div className={styles.blob}></div>
    //   <div className={styles.blob}></div>
    //   <div className={styles.blob}></div>
    // </div>
    <div className={styles.card}></div>
  );
};

const ColorBox = () => {
  return (
    <div className={styles2.box}>
      <span></span>
      <div className={styles2.content}>
        <h2>Hover me!</h2>
      </div>
    </div>
  );
};

export default function Friend() {
  return <ColorBox />;
}
