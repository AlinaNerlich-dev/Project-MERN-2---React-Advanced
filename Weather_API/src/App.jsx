import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import GeoForecast from "./pages/GeoForecast.jsx"
import CitiesForecast from "./pages/CitiesForecast.jsx"
import SelectedCity from "./pages/SelectedCity.jsx"
import Home from "./pages/Home.jsx"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/geoforecast",
      element: <GeoForecast />,
    },
    {
      path: "/selectedCity",
      element: <SelectedCity />,
    },
    {
      path: "/citiesforecast",
      element: <CitiesForecast />,
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App