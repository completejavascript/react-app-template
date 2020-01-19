import React from 'react';
import { connect } from 'react-redux';
import { actionChangeLanguage } from '../../system/systemAction';
import './ChangeLanguage.scss';

const ChangeLanguage = props => {
  const handleClick = lang => () => {
    props.actionChangeLanguage(lang);
  };

  return (
    <div className="change-language-container">
      <span
        className={`item left ${props.languageTrans === 'en' ? 'active' : ''}`}
        onClick={handleClick('en')}
      >
        EN
      </span>
      <span
        className={`item right ${props.languageTrans === 'vi' ? 'active' : ''}`}
        onClick={handleClick('vi')}
      >
        VI
      </span>
    </div>
  );
};

export default connect(
  state => ({
    languageTrans: state.system.languageTrans
  }),
  {
    actionChangeLanguage
  }
)(ChangeLanguage);
