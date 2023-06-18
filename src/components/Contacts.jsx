import React from 'react';
import { socialLinks } from '../utils/links';

const Contacts = () => {
  return (
    <section className="card">
      <h1>Social</h1>

      {socialLinks.map((link) => {
        return (
          <a className="social-link" href={link.link} key={link.id} target="_blank">
            <img src={link.logo} alt={link.name} />
          </a>
        );
      })}
    </section>
  );
};

export default Contacts;
