import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/artisans.json';
import '../App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// icônes leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function ArtisanDetail() {
  const { id } = useParams();
  const artisan = data.find(a => a.id === parseInt(id));

  // États pour le formulaire
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  if (!artisan) return <div>Artisan non trouvé</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/send-email', {  // backend Node.js à créer (voir étape 2)
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'tonemail@exemple.com',   // tu peux envoyer à une adresse fixe, par ex. la tienne
        subject: `Nouveau message pour ${artisan.name}`,
        text: `
          Nom: ${nom}
          Prénom: ${prenom}
          Message: ${message}
        `
      })
    })
      .then(res => res.json())
      .then(data => setStatus('Message envoyé avec succès !'))
      .catch(err => setStatus('Erreur lors de l’envoi : ' + err));
  };

  return (
    <div className="page-container">
      {/* Carte Leaflet */}
      <MapContainer
        center={[artisan.latitude, artisan.longitude]}
        zoom={13}
        scrollWheelZoom={false}
        className="leaflet-container"
        style={{ height: '300px', width: '100%', marginBottom: '1rem' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[artisan.latitude, artisan.longitude]}>
          <Popup>
            <strong>{artisan.name}</strong><br />
            {artisan.specialty} - {artisan.city}
          </Popup>
        </Marker>
      </MapContainer>

      {/* Infos artisan */}
      <div className="artisan-detail-card d-flex bg-info p-3 rounded border mb-4">
        <div className="text-center me-3">
          <div><strong>{artisan.name}</strong></div>
          <div>{artisan.specialty}<br />{artisan.city}</div>
          <div className="stars mt-2">{'★'.repeat(artisan.rating)}</div>
        </div>

        <div className="about-section bg-light p-3 rounded border flex-fill">
          <h4>À propos</h4>
          <p>{artisan.description || 'Description non disponible.'}</p>
          {artisan.website && (
            <p>
              Site web :{' '}
              <a href={artisan.website} target="_blank" rel="noopener noreferrer">
                {artisan.website}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* Formulaire de contact */}
      <div>
        <div className="contact-header">Formulaire de contact</div>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={e => setNom(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={e => setPrenom(e.target.value)}
            required
          />
          <textarea
            rows="4"
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
}

export default ArtisanDetail;
