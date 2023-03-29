import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Products } from "@/pages";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Fragment>
  );
}

export default App;
