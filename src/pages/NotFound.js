import React from 'react';

function NotFound() {
  return (
    <div className="page-container d-flex flex-column min-vh-100">
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center p-5">
        <h1>404</h1>
        <p>Oups ! Cette page n'existe pas.</p>
      </main>
      <footer className="footer bg-light text-center py-3">
        © 2025 MonSite
      </footer>
    </div>
  );
}

export default NotFound;
