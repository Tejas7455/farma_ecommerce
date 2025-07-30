import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Layout/NavBar';
import Home from './Components/Home';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';
import CategoryProduct from './Components/CategoryProduct';
import AllProducts from './Components/AllProducts';
import ProductDetail from './Components/ProductDetail';
import Checkout from './Components/Checkout';

//Customer Panel
import Register from './Components/Customer/Register';
import Login from './Components/Customer/Login';
import CustomerLogout from './Components/Customer/CustomerLogout';
import Dashboard from './Components/Customer/Dashboard';
import Orders from './Components/Customer/Orders';
import ConfirmOrder from './Components/ConfirmOrder';
import OrderSuccess from './Components/OrderSuccess';
import OrderFailure from './Components/OrderFailure';
import Wishlist from './Components/Customer/Wishlist';
import Profile from './Components/Customer/Profile';
import ChangePassword from './Components/Customer/ChangePassword';
import Address from './Components/Customer/Address';
import AddAddress from './Components/Customer/AddAddress';

//seller panel
import SellerLogin from './Components/Seller/SellerLogin';
import SellerRegister from './Components/Seller/SellerRegister';
import SellerDashboard from './Components/Seller/SellerDashboard';
import SellerProducts from './Components/Seller/SellerProducts';
import AddProducts from './Components/Seller/AddProducts';
import VendorOrder from './Components/Seller/VendorOrder';
import Customers from './Components/Seller/Customers';
import Reports from './Components/Seller/Reports';
import SellerChangePassword from './Components/Seller/SellerChangePassword';
import SellerProfile from './Components/Seller/SellerProfile';
import TagProducts from './Components/TagProducts';


import {useState} from 'react';
import { CartContext } from './context';


const checkCart=localStorage.getItem('cartData');


function App() {
  const [cartData,setCartData]=useState(JSON.parse(checkCart));
  
  return (
      <>
        <BrowserRouter>
        <CartContext.Provider value={{cartData,setCartData}} >
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products/' element={<AllProducts/>} />
          <Route path='/category/:category_slug/:category_id' element={<CategoryProduct />} />
          <Route path='/category/:tag' element={<TagProducts />} />
          <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/confirm-order' element={<ConfirmOrder/>}/>
          <Route path='/customer/register/' element={<Register/>} />
          <Route path='/customer/login/' element={<Login/>} />
          <Route path='/customer/logout/' element={<CustomerLogout/>} />
          <Route path='/customer/dashboard/' element={<Dashboard/>} />
          <Route path='/customer/orders/' element={<Orders />} />
          <Route path='/order/success/' element={<OrderSuccess />} />
          <Route path='/order/failure/' element={<OrderFailure/>} />
          <Route path='/customer/wishlist/' element={<Wishlist/>} />
          <Route path='/customer/profile/' element={<Profile />} />
          <Route path='/customer/change-password/' element={<ChangePassword />} />
          <Route path='/customer/address/' element={<Address />} />
          <Route path='/customer/add-address/' element={<AddAddress />} />
          
       
          <Route path='/seller/login/' element={<SellerLogin />} />
          <Route path='/seller/register/' element={<SellerRegister/>} />
          <Route path='/seller/dashboard/' element={<SellerDashboard/>} />
          <Route path='/seller/products/' element={<SellerProducts/>} />
          <Route path='/seller/addproducts/' element={<AddProducts/>} />
          <Route path='/seller/orders/' element={<VendorOrder/>} />
          <Route path='/seller/customers/' element={<Customers/>} />
          <Route path='/seller/reports/' element={<Reports />} />
          <Route path='/seller/change-password/' element={<SellerChangePassword />} />
          <Route path='/seller/profile/' element={<SellerProfile/>} />
        </Routes>
        <NavBar />
        <Footer/>
        </CartContext.Provider >
        </BrowserRouter>
        
      </>  

)
};

export default App;
