import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from "./pages/Home.jsx"
import GeoForecast from "./pages/GeoForecast.jsx"
import GeoCity from "./pages/GeoCity.jsx"
import CitiesForecast from "./pages/CitiesForecast.jsx"


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
      path: "/cities",
      element: <GeoCity />,
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