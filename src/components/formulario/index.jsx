//*Styles
import styles from "./formulario.module.css";

//*React

//*Components
import CampoTexto from "./campoTexto";
import CampoLista from "./campoLista";

const Formulario = () => {
  return (
    <section className={styles.formulario__container}>
      <form className={styles.formulario}>
        <h2>Formulario</h2>
        <CampoTexto titulo="Título" />
        <CampoLista />
        <CampoTexto titulo="Imagen" />
        <CampoTexto titulo="Video" />
        <CampoTexto titulo="Descripción" />
      </form>
    </section>
  );
};

export default Formulario;
