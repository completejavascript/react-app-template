import React from 'react';
import { FormattedMessage } from 'react-intl';
import Navigation from '../../components/Navigation/Navigation';
import Title from '../../components/Title/Title';
import './TermsOfUse.scss';

const TermsOfUse = () => {
  return (
    <div className="terms-of-use-container">
      <Navigation />
      <Title>
        <FormattedMessage id="IDS_TERMS_OF_USE" />
      </Title>
    </div>
  );
};

export default TermsOfUse;
