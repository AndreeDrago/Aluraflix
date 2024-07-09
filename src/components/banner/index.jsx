//*Styles
import styles from "./banner.module.css";

//*Component
import TargetaPrevia from "./targetaPrevia";

function Banner() {
  return (
    <section className={styles.banner}>
      <img src="./img/Banner.png" alt="" />
      <div className={styles.previo}>
        <TargetaPrevia />
      </div>
    </section>
  );
}

export default Banner;
