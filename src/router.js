import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import Blog from './pages/Blog/Blog';

const routes = {
  '/': () => <HomePage />,
  '/terms': () => <TermsOfUse />,
  '/privacy': () => <PrivacyPolicy />,
  '/blog/:id': ({ id }) => <Blog blogId={id} />
};

export default routes;
