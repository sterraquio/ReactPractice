import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import NotFound from "./pages/not-found/NotFound";
import HighBloodPresure from "./pages/heart/high-blood-preasure/HighBloodPresure";
import LowBloodPreasure from "./pages/heart/low-blood-preasure/LowBloodPreasure";
import Heart from "./pages/heart/Heart";
import Layout from "./layout/Layout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="corazon" element={<Heart />}>
          <Route path="presión-alta" element={<HighBloodPresure />} />
          <Route path="presión-baja" element={<LowBloodPreasure />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
