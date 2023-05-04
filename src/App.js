import React from "react";
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Credit from './components/Credit';
import CardList from './components/CardList';
import CenteredButton from './components/CenteredButton';
import Institutional from './components/Institutional';
import Faq from './components/Faq';
import Footer from './components/Footer';
import "./App.scss";

import posts from './components/posts';

const App = () => (
    <div className="App">
      <Navigation />
      <Hero />
      <Credit />
      <CardList posts={posts} />
      <CenteredButton>Abra sua conta</CenteredButton>
      <Institutional />
      <Faq />
      <Footer />
    </div>
  );


export default App;
