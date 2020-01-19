import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Navigation />
      <Title>Home Page</Title>
    </div>
  );
};

export default HomePage;
