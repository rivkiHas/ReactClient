import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './App/features/navBar.js';
import { ProductDetails } from './App/features/product/productDetails.js';
import { ProductList } from './App/features/product/productList.js';
import { Buscket } from './App/features/order/buscket.js';
import { SignUp } from './App/features/user/signUp.js';
import { Login } from './App/features/user/logIn.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userIn } from './App/features/user/userSlice.js';
import { Payment } from './App/features/order/payment.js';
import { About } from './About.js';
import { AddProduct } from './App/features/product/addProduct.js';
import MinimalBasket from './App/features/order/minimalBusket.js';
import { addArrToBusket } from './App/features/order/orderslice.js';
import { AllOrders } from './App/features/order/allOrder.js';
import ProtectedRouteToAdmin from './App/features/user/ProtectedRouteToAdmin.js';
import ProtectedRouteToUser from './App/features/user/ProtectedRouteToUser.js';

function App() {
  let dispatch = useDispatch();
  useEffect(() => {

    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      dispatch(userIn(user));
    }
    const basket = JSON.parse(localStorage.getItem("busket"));
    if (basket && Array.isArray(basket)) {
      dispatch(addArrToBusket(basket));
    }
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/list/:category' element={<ProductList />}>
          <Route path=':id' element={<ProductDetails />} />
        </Route>
        <Route path='/Buscket' element={<Buscket />}></Route>
        <Route path='/LogIn' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/payment' element={<ProtectedRouteToUser><Payment /></ProtectedRouteToUser>}></Route>
        <Route path='/about' element={<About />} /> {/* נוספה קומפוננטת האודות כמסלול מוגדר כברירת המחדל */}
        <Route path='/minimalBasket' element={<MinimalBasket />}></Route>
        <Route path='/addProduct' element={<ProtectedRouteToAdmin><AddProduct /></ProtectedRouteToAdmin>}></Route>
        <Route path='/allOrders' element={<ProtectedRouteToAdmin><AllOrders /></ProtectedRouteToAdmin>}></Route>
      </Routes>
    </div>
  );
}

export default App;
