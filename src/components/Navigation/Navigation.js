import React from 'react';
import { A } from 'hookrouter';
import { FormattedMessage } from 'react-intl';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import './Navigation.scss';

const Item = ({ link, text }) => (
  <li>
    <A href={link}>{text}</A>
  </li>
);

const Menu = () => (
  <ul className="left">
    <Item link="/" text={<FormattedMessage id="IDS_HOME_PAGE" />} />
    <Item link="/terms" text={<FormattedMessage id="IDS_TERMS_OF_USE" />} />
    <Item link="/privacy" text={<FormattedMessage id="IDS_PRIVACY_POLICY" />} />
    <Item
      link="/blog/1"
      text={
        <FormattedMessage id="IDS_BLOG_PAGE_WITH_ID" values={{ blogId: 1 }} />
      }
    />
    <Item
      link="/blog/2"
      text={
        <FormattedMessage id="IDS_BLOG_PAGE_WITH_ID" values={{ blogId: 2 }} />
      }
    />
  </ul>
);

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Menu />
      <ChangeLanguage />
    </div>
  );
};

export default Navigation;
