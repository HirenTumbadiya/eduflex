import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/auth/Login.js";
import Navbar from "./components/common/Navbar.js";
import Home from "./pages/common/Home.js";
import RegistrationPage from "./pages/auth/Register.js";
import Footer from "./components/common/Footer.js";
import AboutPage from "./pages/common/About.js";
import Courses from "./pages/common/Courses.js";
import Blog from "./pages/common/Blog.js";
import Tools from "./pages/common/Tools.js";
import Contact from "./pages/common/Contact.js";
import UserDashboard from "./pages/authuser/UserDashBoard.js";
import ForgotPassword from "./pages/auth/ForgotPassword.js";
import BlogDetail from "./pages/common/BlogDetail.js";
import Workshops from "./pages/common/WorkShop.js";
import AdminDashboard from "./components/admin/AdminDashboard.js";

const ConditionalLayout = ({ component: Component, hideNavbar, hideFooter, ...rest }) => {
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Component {...rest} />
      {!hideFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ConditionalLayout component={Home} hideNavbar={false} hideFooter={false} />}
        />
        <Route
          path="/login"
          element={<ConditionalLayout component={Login} hideNavbar={true} hideFooter={true} />}
        />
        <Route
          path="/about"
          element={<ConditionalLayout component={AboutPage} hideNavbar={false} hideFooter={false} />}
        />
        <Route
          path="/courses"
          element={<ConditionalLayout component={Courses} hideNavbar={false} hideFooter={false} />}
        />
        <Route
          path="/workshops"
          element={<ConditionalLayout component={Workshops} hideNavbar={false} hideFooter={false} />}
        />
        <Route
          path="/blog"
          element={<ConditionalLayout component={Blog} hideNavbar={false} hideFooter={false} />}
        />
        <Route
         path="/blog/:id"
          element={<ConditionalLayout component={BlogDetail} hideNavbar={false} hideFooter={false} />}
        />
        <Route
          path="/trading-tools"
          element={<ConditionalLayout component={Tools} hideNavbar={false} hideFooter={false} />}
        />
        <Route
          path="/contact-us"
          element={<ConditionalLayout component={Contact} hideNavbar={false} hideFooter={false} />}
        />
        <Route
          path="/dashboard/*"
          element={<ConditionalLayout component={UserDashboard} hideNavbar={true} hideFooter={true} />}
        />
        <Route
          path="/register"
          element={<ConditionalLayout component={RegistrationPage} hideNavbar={true} hideFooter={true} />}
        />
        <Route
          path="/forgot-password"
          element={<ConditionalLayout component={ForgotPassword} hideNavbar={true} hideFooter={true} />}
        />
        <Route
          exact path="/admin/dashboard"
          element={<ConditionalLayout component={AdminDashboard} hideNavbar={true} hideFooter={true} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
