import RestaurantsPage from "./pages/restaurants-page/RestaurantsPage"
import ThemeContextProvider from "./context/ThemeContext/ThemeCOntextProvider";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {

  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <RestaurantsPage />
      </ThemeContextProvider>
    </Provider>
  )
}

export default App;