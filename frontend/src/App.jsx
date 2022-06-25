import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/Errorpage";
import Logout from "./components/Logout";

import { initialState, reducer } from "./reducer/UseReducer";
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Product1 from "./pages/Product1"
import Product2 from "./pages/Product2"
import Product3 from "./pages/Product3"
import Product4 from "./pages/Product4"
import Antique from "./pages/Antique" 
import Accessories from "./pages/Accessories"
import Books from "./pages/Books"
import Gibson from "./pages/Gibson"
import Stuartandsons from "./pages/Stuartandsons"
import Getzen from "./pages/Getzen"
import Ludwig from "./pages/Ludwig"
import Miya from "./pages/Miya"
import ProductList from "./pages/ProductList"
import BrandList from "./pages/BrandList"
import Card from "./pages/MusicKaksha"






// we create a contextAPI 
export const UserContext = createContext();

  

const Routing = () => {
  
  return (
    <>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/musickaksha">
        <Card />
      </Route>

      <Route path="/productlist" >
        <ProductList /> 
        </Route>

        <Route path="/product">
        <Product />
      </Route>

      <Route path="/product1">
        <Product1 />
      </Route>

<Route path="/product2">
        <Product2 />
      </Route>

<Route path="/product3">
        <Product3 />
      </Route>

<Route path="/product4">
        <Product4 />
      </Route>

<Route path="/cart">
        <Cart />
      </Route>

      <Route path="/gibson" >
<Gibson /> 
</Route>

      <Route path="/antique">
        <Antique />
      </Route>

      <Route path="/accessories">
        <Accessories />
      </Route>

      <Route path="/books">
        <Books />
      </Route>
        
      <Route path="/stuartandsons">
        <Stuartandsons />
      </Route>

 <Route path="/getzen">
        <Getzen />
      </Route>

      <Route path="/ludwig">
        <Ludwig />
      </Route>

      <Route path="/miya">
        <Miya />
      </Route>
        
      <Route path="/brandlist">
        <BrandList />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
        
      <Route path="/logout">
        <Logout />
      </Route>
      
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
    </>
  )
}

const App = () => {

  //* we use useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        <Announcement />
        <Navbar />
        <Routing />
        <Footer />
      </UserContext.Provider>
  )
}

export default App

