//*React
import { Outlet } from "react-router-dom";

//*Components
import Header from "../../components/header";
import Footer from "./../../components/footer/index";

function BasePage() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default BasePage;
