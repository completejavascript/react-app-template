import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Navigation />
      <Title>
        <FormattedMessage id="IDS_HOME_PAGE" />
      </Title>
    </div>
  );
};

export default HomePage;
