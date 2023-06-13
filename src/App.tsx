import { Navigate, Route, Routes } from "react-router-dom";
import { AccessoriesPage } from "./pages/AccessoriesPage";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/PageNotFound";
import { PhonesPage } from "./pages/PhonesPage";
import { TabletsPage } from "./pages/TabletsPage";
import { CartPage } from "./pages/CartPage";


import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
};
