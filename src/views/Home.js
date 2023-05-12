import React from "react";
import Hero from '../components/Hero';
import Credit from '../components/Credit';
import CardList from '../components/CardList';
import CenteredButton from '../components/CenteredButton';
import Institutional from '../components/Institutional';
import Faq from '../components/Faq';


import posts from '../components/posts';


const Home = ({ handleClick }) => (
    <>
      <Hero onClick={handleClick}/>

      <Credit />
      <CardList posts={posts} />
      <CenteredButton onClick={handleClick}>
        Abra sua conta
      </CenteredButton>
      
      <Institutional onClick={handleClick}/>
      <Faq />
      
    </>
  );



export default Home;
