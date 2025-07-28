
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import data from '../data/artisans.json';
import ArtisanCard from '../components/ArtisanCard';

function ArtisanList() {
  const { category } = useParams();
  const query = new URLSearchParams(useLocation().search).get('query');
  const filtered = data.filter(artisan => {
    const term = query || category;
    return (
      artisan.name.toLowerCase().includes(term.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(term.toLowerCase()) ||
      artisan.city.toLowerCase().includes(term.toLowerCase())
    );
  });

  return (
    <div>
      <h2>Résultats</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {filtered.map(a => <ArtisanCard key={a.id} artisan={a} />)}
      </div>
    </div>
  );
}

export default ArtisanList;