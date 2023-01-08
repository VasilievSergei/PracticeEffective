import React, { FC } from 'react';

import classes from './Footer.module.scss';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <img src="/marvel_logo.svg" alt="marvel" className={classes.logo} />
      <p>Data provided by Marvel.© {currentYear} MARVEL</p>
      <a href="https://developer.marvel.com/">developer.marvel.com</a>
    </footer>
  );
};

export default Footer;
