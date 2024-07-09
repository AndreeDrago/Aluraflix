//*React
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

//*Assets
import logo from "./Logo.svg";

//*Style
import styles from "./header.module.css";

//*Components
import BottonLink from "../bottonLink";

function Header() {
  let location = useLocation();

  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <section className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </section>
      </Link>
      <section className={styles.bottonContainer}>
        <BottonLink url="./" activo={location.pathname == "/" ? true : false}>
          Home
        </BottonLink>
        <BottonLink
          url="./nuevo-video"
          activo={location.pathname == "/nuevo-video" ? true : false}
        >
          Nuevo Video
        </BottonLink>
      </section>
    </header>
  );
}

export default Header;
