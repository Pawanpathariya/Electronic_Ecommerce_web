import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CardData from "./pages/CardData";
import ProductDetail from "./pages/ProductDeatil";
import UserLogin from "./pages/UserLogin";
import Leptop from "./pages/Leptop";
import Mobile from "./pages/Mobile";
import Search from "./pages/Search";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Computer from "./pages/Computer";
import AdminDashboard from "./admin/AdminDashboard";
import InsertProduct from "./admin/InsertProduct";
import ManageUsers from "./admin/ManageUsers";
import ViewOrders from "./admin/ViewOrders";
import ViewProducts from "./admin/ViewProducts";
import AHome from "./admin/AHome";
import Login from "./admin/Login";
import ProtectedRoute from "./admin/ProtectedRoute";
import Register from "./pages/Register";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="carddata" element={<CardData />} />
          <Route path="prodetail/:proid" element={<ProductDetail />} />
          <Route path="products/leptop" element={<Leptop/>}/>
          <Route path="products/mobile" element={<Mobile/>}/>
          <Route path="products/computer" element={<Computer/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="checkout" element={<Checkout/>}/>
          <Route path="userlogin" element={<UserLogin/>} />
          <Route path="register" element={<Register/>}/>

        </Route>

          {/* Admin Routes */}

   <Route path="/admin" element={<Login/>}/>



          <Route path="/admindashboard" element={<ProtectedRoute Component={AdminDashboard}/>}>
            <Route index element={<AHome />} />
            <Route path="adminhome" element={<AHome />} />
            <Route path="insertpro" element={<InsertProduct />} />
            <Route path="ahome" element={<Home/>}/>
            <Route path="viewpro" element={<ViewProducts/>}/> 
            <Route path="manusers" element={<ManageUsers/>}/>
            <Route path="orders" element={<ViewOrders/>}/>
            <Route path="checkout" element={<Checkout/>}/>
          </Route>

      </Routes>
      
    </BrowserRouter>
  );
};

export default App;

