
import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white mt-5 py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <div>
          <p><strong>Mentions légales</strong></p>
          <p>Données personnelles</p>
          <p>Accessibilité</p>
          <p>Cookies</p>
        </div>
        <div>
          <p>101 cours Charlemagne</p>
          <p>CS 20033</p>
          <p>69269 LYON CEDEX 02</p>
          <p>France</p>
          <p>+33 0 0000 000 00</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;