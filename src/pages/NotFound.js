import React from 'react';
// import NotFoundImage from '../assets/404.png'; // image désactivée temporairement

function NotFound() {
  return (
    <div className="not-found-page text-center p-5">
      <h1>404</h1>
      <p>Oups ! Cette page n'existe pas.</p>

      {/* Tu peux réactiver ça quand l'image sera dispo */}
      {/* <img src={NotFoundImage} alt="404 - Not Found" style={{ maxWidth: '100%' }} /> */}
    </div>
  );
}

export default NotFound;
