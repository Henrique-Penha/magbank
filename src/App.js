import React from "react";
import { useState } from "react";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from './views/Home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import PrivateRouter from "./components/PrivateRouter";

import { Route, Routes } from "react-router-dom";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  
  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const isLogged = name && account;
  const fakeAuth = {
    login: (name, account, cb) => {
      setName(name);
      setAccount(account);
      setTimeout(cb, 100);
    },
    logout: (cb) => {
      setName();
      setAccount();
      setTimeout(cb, 100);
    }
  };


  return (
    <>
      <Navigation handleCreateAcc={() => setShowModal(true)} logged={isLogged} auth={fakeAuth} />
      
      <Routes>
        <Route path="/" element={<Home handleClick={() => setShowModal(true)} />} />
        <Route path="/login" element={<Login auth={fakeAuth} />} />
        <Route path="/dashboard/*" element={<PrivateRouter Component={Dashboard} logged={isLogged} />} />
      </Routes>


      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};


export default App;
