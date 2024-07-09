//*React
import { BrowserRouter, Routes, Route } from "react-router-dom";

//*Pages
import BasePage from "./pages/Base";
import NotFound from "./pages/NotFound";
import Home from "./pages/home";
import NewVideo from "./pages/newVideo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />}></Route>
          <Route path="nuevo-video" element={<NewVideo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
