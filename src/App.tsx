import { CircularProgress } from "@mui/material";
import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "src/pages/Home";
import LoginPage from "src/pages/LoginPage";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import SearchPage from "./pages/SearchPage";
import ChurchState from "./pages/ChurchState";
import TagDetail from "./pages/TagDetail";
import AboutPage from "./pages/About";
import ItemDetails from "./pages/ItemDetails/index";
import ItemDetails2 from "./pages/ItemDetails/index2";
import ItemDetails3 from "./pages/ItemDetails/index3";
import { PreventRightClickProvider } from "./providers/PreventRightClickContext";

function App() {
  return (
    <PreventRightClickProvider>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paineis-do-carmo" element={<Home />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/paineis-do-carmo/login" element={<LoginPage />} />

            <Route path="/pesquisa/:selected" element={<SearchPage />} />
            <Route
              path="/paineis-do-carmo/pesquisa/:selected"
              element={<SearchPage />}
            />
            <Route
              path="/paineis-do-carmo/pesquisa/igrejas/:state"
              element={<ChurchState />}
            />
            <Route path="/pesquisa/igrejas/:state" element={<ChurchState />} />
            <Route
              path="/paineis-do-carmo/pesquisa/"
              element={<Navigate to="/paineis-do-carmo/pesquisa/obras" />}
            />
            <Route path="/topicos/:tag" element={<TagDetail />} />
            <Route
              path="/paineis-do-carmo/topicos/:tag"
              element={<TagDetail />}
            />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="/paineis-do-carmo/item/1" element={<ItemDetails />} />
            <Route path="/paineis-do-carmo/item/2" element={<ItemDetails3 />} />
            <Route path="/paineis-do-carmo/item/3" element={<ItemDetails2 />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/paineis-do-carmo/sobre" element={<AboutPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </PreventRightClickProvider>
  );
}

export default App;
