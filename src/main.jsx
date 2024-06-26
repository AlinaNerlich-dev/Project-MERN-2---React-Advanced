import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import App from './App.jsx'
import SelectedCity from "./pages/SelectedCity.jsx"
import Home from "./pages/Home.jsx";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/selectedCity/:cityName" element={<SelectedCity />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
) 
