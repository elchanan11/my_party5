import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import './blackLink.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,

    Redirect,
    Routes, Navigate,
} from 'react-router-dom'
import {useSelector} from "react-redux";

const App = () => {
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
  return(
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <Home />
                }
                />
                <Route path="/products/:category" element={
                    <ProductList />
                }
                />
                <Route path="/product/:productName" element={
                    <Product />
                }
                />
                <Route path="/cart" element={
                    <Cart />
                }
                />
                <Route path="/login" element={
                    user ? <Navigate to={'/'}/> : <Login />
                }
                />
                <Route path="/register" element={
                    user ? <Navigate to={'/'}/> : <Register />
                }
                />
            </Routes>
        </Router>
      {/*<Home />*/}
      {/* <ProductList />*/}
      {/* <Product />*/}
      {/*  {<Login />}*/}
      {/*{<Register />}*/}
      {/*{<Cart />}*/}
    </>
  )
};

export default App;