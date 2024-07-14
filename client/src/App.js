import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Background from "./components/Background";
import FAQs from "./components/FAQs";
import About from "./components/AboutUs";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

import Books from "./components/Books";
import Mybooks from "./components/Mybooks";
import Admin from "./components/Admin";


function App() {
  return (
    <>
      <Background />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Signup />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/aboutus" element={<About />} />

            <Route path="/books" element={ <Books /> } />
            <Route path="/history" element={ <Mybooks /> } />
            <Route path="/admin/*" element={<Admin />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
          <TopBar />
          <Footer/> 
        </div>
      </Router>
    </>
  );
}

export default App;
