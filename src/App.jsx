import RestaurantsPage from "./pages/restaurants-page/RestaurantsPage"
import ThemeContextProvider from "./context/ThemeContext/ThemeCOntextProvider";

const App = ( {restaurants} ) => {

  return (
    <ThemeContextProvider>
      <RestaurantsPage restaurants={restaurants} />
    </ThemeContextProvider>
  )
}

export default App;