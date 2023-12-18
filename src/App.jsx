import RestaurantsPage from "./pages/restaurants-page/component"
import ThemeContextProvider from "./context/ThemeContext/ThemeCOntextProvider";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom/dist";
import { MainPage } from "./pages/main-page/component";
import { NotFoundPage } from "./pages/not-found-page/component";
import { RestaurantPage } from "./pages/restaurant-page/component";
import Layout from "./layout/Layout";
import { MenuContainer } from "./components/menu/container-rout";
import { RestaurantReviewsSectionContainer } from "./components/RestaurantReviewsSection/container";

const App = () => {

  return (
    <Provider store={store}>
      <ThemeContextProvider>
      
        <BrowserRouter>
          <Layout >
            <Routes>
              <Route index element={<MainPage/>}/>
              <Route path="restaurants" element={<RestaurantsPage/>}>
                <Route path=":restaurantId" element={<RestaurantPage/>}>                
                  {/* <Route index element={<RestaurantContainer/>} /> */}
                  <Route index element={<Navigate to="menu" replace/>} />
                  <Route path="menu" element={<MenuContainer/>} />
                  <Route path="reviews" element={<RestaurantReviewsSectionContainer/>} />
                </Route>
              </Route>
              <Route path="*" element={<NotFoundPage/> } />
            </Routes>
          </Layout>
        </BrowserRouter>
        
      </ThemeContextProvider>
    </Provider>
  )
}

export default App;