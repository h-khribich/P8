import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import APropos from './pages/APropos'
import NotFound from './pages/NotFound'
import Layout from "./pages/Layout";
import './style/App.css'
import { PropertiesProvider } from "./components/customHooks/propertiesProvider";

function App() {
  return (
    <PropertiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="fiche-logement/:id" element={<FicheLogement />} />
            <Route path="a-propos" element={<APropos />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PropertiesProvider>
  );
}

export default App;
