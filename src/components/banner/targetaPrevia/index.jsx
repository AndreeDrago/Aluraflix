//*Stiles

import styles from "./targetaPrevia.module.css";

//*Component
import ImagenDiseño from "../../ImagenDiseño";

function TargetaPrevia() {
  return (
    <section className={styles.previaContainer}>
      <div className={styles.datos}>
        <h2>Front End</h2>
        <h3>Challenge React</h3>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className={styles.imagenDiseño}>
        <ImagenDiseño
          bordeRadio="1rem"
          borderColor="#6BD1FF"
          imagen="./img/Video-Previo.jpg"
        />
      </div>
    </section>
  );
}

export default TargetaPrevia;
