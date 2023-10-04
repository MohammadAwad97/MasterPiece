import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";

import LandingPageUsers from "./Components/Users/LandingPageUsers";
import LadingPageProducts from "./Components/Products/LadingPageProducts";
import AsideNav from "./Components/AsideNav/AsideNav";
import LandingPageDash from "./Components/Admin/LandingPageDash";
import LandingPageStores from "./Components/Stores/LandingPageStores";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="parent" style={{ display: "flex" }}>
          {/* <AsideBar/> */}
          <AsideNav />
          <div className="mainContent">
            <Routes>
              <Route path="/" element={<LandingPageDash />} />
              <Route path="/allProducts" element={<LadingPageProducts />} />
              <Route path="/users" element={<LandingPageUsers />} />
              <Route path="/allStores" element={<LandingPageStores />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
