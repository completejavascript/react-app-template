import React from 'react';
import { A } from 'hookrouter';
import { FormattedMessage } from 'react-intl';
import ChangeLanguage from '../ChangeLanguage/ChangeLanguage';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <ul className="left">
        <li>
          <A href="/">
            <FormattedMessage id="IDS_HOME_PAGE" />
          </A>
        </li>
        <li>
          <A href="/terms">
            <FormattedMessage id="IDS_TERMS_OF_USE" />
          </A>
        </li>
        <li>
          <A href="/privacy">
            <FormattedMessage id="IDS_PRIVACY_POLICY" />
          </A>
        </li>
        <li>
          <A href="/blog/1">
            <FormattedMessage
              id="IDS_BLOG_PAGE_WITH_ID"
              values={{ blogId: 1 }}
            />
          </A>
        </li>
        <li>
          <A href="/blog/2">
            <FormattedMessage
              id="IDS_BLOG_PAGE_WITH_ID"
              values={{ blogId: 2 }}
            />
          </A>
        </li>
      </ul>
      <ChangeLanguage />
    </div>
  );
};

export default Navigation;
