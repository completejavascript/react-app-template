import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './NoPageFound.scss';

const NoPageFound = () => {
  return (
    <div className="no-page-found-container">
      <Navigation />
      <Title>No Page Found</Title>
    </div>
  );
};

export default NoPageFound;
