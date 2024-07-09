//*Styles
import styles from "./grupos.module.css";

//*Component
import Tarjeta from "./tarjetas";

function Grupo({ datos, videos }) {
  return (
    <section className={styles.grupo}>
      <h3 style={{ backgroundColor: datos.color }}>{datos.titulo}</h3>
      <div className={styles.tarjetas}>
        {videos.map((video, index) => (
          <Tarjeta key={index} datos={video} borderColor={datos.color} />
        ))}
      </div>
    </section>
  );
}

export default Grupo;
