//*Style
import style from "./newVideo.module.css";

//*Components
import Formulario from "../../components/formulario";

function NewVideo() {
  return (
    <section className={style.formulario__container}>
      <h1>Nuevo video</h1>
      <p>Completa el formulario para crear una nueva tarjeta de video</p>
      <Formulario />
    </section>
  );
}

export default NewVideo;
