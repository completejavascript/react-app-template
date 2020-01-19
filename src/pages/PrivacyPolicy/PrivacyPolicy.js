import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Navigation />
      <Title>
        <FormattedMessage id="IDS_PRIVACY_POLICY" />
      </Title>
    </div>
  );
};

export default PrivacyPolicy;
