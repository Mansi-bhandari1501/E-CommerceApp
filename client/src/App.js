import React from "react";
import './App.css';
import Header from "./components/header";
import Login from "./components/sign-up/login";
import Signup from "./components/sign-up/signup";
import Footer from "./components/footer";
import ErrorPage from "./components/ErrorPage"

import { Routes,Route } from "react-router-dom";
import Item from "./components/frontpage/Item";
import Frontpage from "./components/frontpage/frontpage";
import Dashboard from "./pages/users/UserDashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./components/sign-up/forgotpassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/users/Orders";
import Profile from "./pages/users/Profile";
function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      
      <Route path='/' element={<Frontpage />}/>
      <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders/>} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
      <Route path='/signuppage' element={<Signup />}/>
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path='/loginpage' element={<Login />}/>
      <Route path='*' element={<ErrorPage />} />
      <Route path='/item' element={<Item />}/>

     </Routes>
     <Footer />
    </div>
  );
}

export default App;
