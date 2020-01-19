import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './NoPageFound.scss';

const NoPageFound = () => {
  return (
    <div className="no-page-found-container">
      <Navigation />
      <Title>
        <FormattedMessage id="IDS_NO_PAGE_FOUND" />
      </Title>
    </div>
  );
};

export default NoPageFound;
