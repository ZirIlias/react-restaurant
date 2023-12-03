import { useState } from "react";
import RestaurantsPage from "./pages/restaurants-page/RestaurantsPage"
import { ThemeContext } from "./context/ThemeContext";

const App = ( {restaurants} ) => {

  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <RestaurantsPage restaurants={restaurants} />
    </ThemeContext.Provider>
  )
}

export default App;