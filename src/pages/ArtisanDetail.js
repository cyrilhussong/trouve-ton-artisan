import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/artisans.json';
import '../App.css';

function ArtisanDetail() {
  const { id } = useParams();
  const artisan = data.find(a => a.id === parseInt(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé à ' + artisan.name);
  };

  return (
    <div className="page-container">
      {/* Carte artisan */}
      <div className="artisan-detail-card d-flex bg-info p-3 rounded border mb-4">
        <div className="text-center me-3">
          <img
            src="https://via.placeholder.com/80x80.png?text=👤"
            alt="avatar"
            className="rounded-circle mb-2"
          />
          <div><strong>{artisan.name}</strong></div>
          <div>{artisan.specialty}<br />{artisan.city}</div>
          <div className="stars mt-2">{'★'.repeat(artisan.rating)}</div>
        </div>

        <div className="bg-light flex-fill p-3 rounded border">
          <p className="m-0">{artisan.description || 'description artisan'}</p>
        </div>
      </div>

      {/* Formulaire de contact */}
      <div>
        <div className="contact-header">
          Formulaire de contact
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" placeholder="Nom" required />
          <input type="text" placeholder="Prénom" required />
          <textarea rows="4" placeholder="Message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ArtisanDetail;
