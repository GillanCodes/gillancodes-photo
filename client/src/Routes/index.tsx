import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

export default function index() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" Component={Home} />
        </Routes>
    </BrowserRouter>
  )
}
