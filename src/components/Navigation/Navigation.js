import React from 'react';
import { A } from 'hookrouter';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation-container">
      <ul>
        <li><A href="/">Home</A></li>
        <li><A href="/terms">Terms of Use</A></li>
        <li><A href="/privacy">Privacy Policy</A></li>
        <li><A href="/blog/1">Blog 1</A></li>
        <li><A href="/blog/2">Blog 2</A></li>
      </ul>
    </div>
  );
};

export default Navigation;
