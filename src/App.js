import React from "react";
import { useState } from "react";
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Credit from './components/Credit';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Faq from './components/Faq';
import Footer from './components/Footer';
import AccountModal from "./components/AccountModal";
import "./App.scss";

import posts from './components/posts';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navigation handleCreateAcc={() => setShowModal(true)} />
      <Hero onClick={() => setShowModal(true)}/>
      <Credit />
      <CardList posts={posts} />
      <CenteredButton onClick={() => setShowModal(true)}>
        Abra sua conta
      </CenteredButton>
      
      <Institutional onClick={() => setShowModal(true)}/>
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};


export default App;
