//*react
import { useLocation } from "react-router-dom";

//*Styles
import BottonLink from "../bottonLink";
import styles from "./footer.module.css";

//*Assets
import logo from "./Logo.svg";

function Footer() {
  let location = useLocation();

  return (
    <footer className={styles.footerContainer}>
      <section className={styles.logoContainer}>
        <img src={logo} alt="logo" />
      </section>
      <section className={styles.bottonContainer}>
        <BottonLink
          url="./"
          activo={location.pathname == "/" ? true : false}
          iconoActivo="icon/home-activo.png"
          iconoInactivo="icon/home-inactivo.png"
        >
          Home
        </BottonLink>
        <BottonLink
          url="./nuevo-video"
          activo={location.pathname == "/nuevo-video" ? true : false}
          iconoActivo="icon/nuevo-activo.png"
          iconoInactivo="icon/nuevo-inactivo.png"
        >
          Nuevo Video
        </BottonLink>
      </section>
    </footer>
  );
}

export default Footer;
