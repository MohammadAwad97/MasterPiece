import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { useState } from "react";

import LandingPageUsers from "./Components/Users/LandingPageUsers";
import LadingPageProducts from "./Components/Products/LandingPageProducts";
import AsideNav from "./Components/AsideNav/AsideNav";
import LandingPageDash from "./Components/Admin/LandingPageDash";
import LandingPageStores from "./Components/Stores/LandingPageStores";
import Login from "./Components/Login/Login";
import ProductList from "./Components/StoreProducts/ProductList";
import NotFound from "./Components/NotFound/NotFound";
import LoginStores from "./Components/LoginStores/LoginStores";

function App() {
  const [adminId, setAdminId] = useState(sessionStorage.getItem("adminId"));
  const [storeId, setStoreId] = useState(sessionStorage.getItem("storeID"));
  // هون مهم انك تخلي قيمة الاي دي تساوي السيشين عشان لما تعمل رفرش ما ترجع قيتها انديفايند و ترجع لصفحة اللوج ان مرة ثانية يا حج

  //Set adminId:
  const setCurrentAdmin = async (id) => {
    sessionStorage.setItem("adminId", id);
    setAdminId(sessionStorage.getItem("adminId"));
  };

  //Clear adminId:
  const clearSession = () => {
    sessionStorage.clear();
    setAdminId(sessionStorage.getItem("adminId"));
  };

  //Set storeId:
  const setCurrentStore = async (id) => {
    sessionStorage.setItem("storeId", id);
    setStoreId(sessionStorage.getItem("storeId"));
  };

  return (
    <>
      {adminId && (
        <div>
          <Header />
          <div className="parent" style={{ display: "flex" }}>
            <AsideNav clearSession={clearSession} />
            <div className="mainContent">
              <Routes>
                <Route path="/" element={<LandingPageDash />} />
                <Route path="/allProducts" element={<LadingPageProducts />} />
                <Route path="/users" element={<LandingPageUsers />} />
                <Route path="/allStores" element={<LandingPageStores />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
      {storeId && (
        <div>
          <Header />
          <Routes>
            <Route path="/storeProduct" element={<ProductList />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
      {!adminId && !storeId && (
        <Routes>
          <Route
            path="/"
            element={
              <Login adminId={adminId} setCurrentAdmin={setCurrentAdmin} />
            }
          />
          <Route
            path="/LoginStores"
            element={
              <LoginStores
                storeId={storeId}
                setCurrentStore={setCurrentStore}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
