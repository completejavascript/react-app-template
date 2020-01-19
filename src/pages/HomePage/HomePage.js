import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import api from '../../helpers/api';
import './HomePage.scss';

const HomePage = () => {
  const testApi = async () => {
    console.log('test api');
    try {
      const { data } = await api.request({
        method: 'get',
        url: 'users/1'
      });
      console.log({ data });
    } catch (error) {
      console.log('error to get users: ', error);
    }
  };

  useEffect(() => {
    testApi();
  }, []);

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
