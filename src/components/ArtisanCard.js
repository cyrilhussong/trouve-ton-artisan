import React from 'react';
import { Link } from 'react-router-dom';

function ArtisanCard({ artisan }) {
  return (
    <Link to={`/artisan/${artisan.id}`} className="text-decoration-none">
      <div className="artisan-card">
        <h5 className="fw-bold">{artisan.name}</h5>
        <div className="stars mb-2">{'★'.repeat(artisan.rating)}</div>
        <p className="m-0">{artisan.specialty}</p>
        <p className="m-0">{artisan.city}</p>
      </div>
    </Link>
  );
}

export default ArtisanCard;
