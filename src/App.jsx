import { Outlet, useNavigate } from "react-router-dom";
import CheckboxContext from "./context/CheckboxContext";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [forecast, setForecast] = useState(false);
  const checkbox = document.getElementById("checkbox");

  function handleChange(e) {

    if (e.target.value == "home") {
      setForecast(false)
      checkbox.checked = false;
      navigate(`/`);
    } else {
      setForecast(false)
      checkbox.checked = false;
      navigate(`selectedCity/${e.target.value}`);
    }
  }

  return (
    <>
      <div id="select">
        <select
          defaultValue="none"
          name="cities"
          id="cities"
          onChange={(e) => handleChange(e)}
        >
          <option disabled value="none">
            Select a City
          </option>
          <option value="Duesseldorf" name="Duesseldorf">
            Düsseldorf
          </option>
          <option value="Muenster" name="Muenster">
            Münster
          </option>
          <option value="Chandigarh" name="Chandigarh">
            Chandigarh
          </option>
          <option value="Dehli" name="Dehli">
            Dehli
          </option>
          <option value="Mumbai" name="Mumbai">
            Mumbai
          </option>
          <option value="home" name="Home">
            My Current Location
          </option>
        </select>
      </div>
      <div id="home">
        <div id="welcome">
          <p>- Welcome to -</p>
          <CheckboxContext.Provider value={{forecast, setForecast}}>
            <Outlet />
          </CheckboxContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
