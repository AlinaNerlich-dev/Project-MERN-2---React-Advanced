import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import App from './App.jsx'
import GeoForecast from "./pages/Forecast/GeoForecast.jsx"
import CitiesForecast from "./pages/Forecast/CitiesForecast.jsx"
import SelectedCity from "./pages/SelectedCity.jsx"
import Home from "./pages/Home.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="geoforecast" element={<GeoForecast />} />
        <Route path="selectedCity" element={<SelectedCity />} />
        <Route path="citiesforecast/:id" element={<CitiesForecast />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>
)
