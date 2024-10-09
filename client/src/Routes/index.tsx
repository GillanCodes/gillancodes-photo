import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Footer from "../Components/Footer";

export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}
