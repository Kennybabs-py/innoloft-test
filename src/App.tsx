import { Route, Routes } from "react-router-dom";

import { Layout, Navigation } from "@/components";
import { Main, Products } from "@/pages";

import "./App.css";

function App() {
  return (
    <Layout>
      <main className="border border-solid border-black w-full max-w-[1440px] mx-auto flex items-center lg:items-start justify-start gap-10">
        <Navigation />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
