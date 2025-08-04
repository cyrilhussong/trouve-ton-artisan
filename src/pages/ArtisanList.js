import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import data from '../data/artisans.json';
import ArtisanCard from '../components/ArtisanCard';

const categoryMap = {
  plombier: "batiment",
  menuisier: "batiment",
  électricien: "batiment",
  peintre: "batiment",
  couvreur: "batiment",
  maçon: "batiment",
  plâtrier: "batiment",
  charpentier: "batiment",

  boulanger: "alimentation",
  boucher: "alimentation",
  pâtissier: "alimentation",
  poissonnier: "alimentation",
  charcutier: "alimentation",
  fromager: "alimentation",
  traiteur: "alimentation",
  caviste: "alimentation",

  coiffeur: "services",
  esthéticienne: "services",
  "agent de sécurité": "services",
  jardinier: "services",
  "mécanicien auto": "services",
  taxi: "services",
  "plombier chauffagiste": "services",
  "garde d’enfants": "services",

  "tourneur-fraiseur": "fabrication",
  soudeur: "fabrication",
  "mécanicien industriel": "fabrication",
  chaudronnier: "fabrication",
  "menuisier industriel": "fabrication",
  métallier: "fabrication",
  "mécanicien de précision": "fabrication",
  "conducteur de ligne": "fabrication",
};

function ArtisanList() {
  const { category } = useParams();
  const query = new URLSearchParams(useLocation().search).get('query');

  const filtered = data.filter((artisan) => {
    let matchesCategory = true;
    let matchesQuery = true;

    if (category) {
      const artisanCategory = categoryMap[artisan.specialty.toLowerCase()];
      matchesCategory = artisanCategory === category.toLowerCase();
    }

    if (query) {
      const term = query.toLowerCase();
      matchesQuery =
        artisan.name.toLowerCase().includes(term) ||
        artisan.specialty.toLowerCase().includes(term) ||
        artisan.city.toLowerCase().includes(term);
    }

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="page-container">
      <h2 className="text-center mb-4">
        Résultats
        {category ? ` - ${category.charAt(0).toUpperCase() + category.slice(1)}` : ''}
        {query ? ` pour "${query}"` : ''}
      </h2>

      {filtered.length > 0 ? (
        <div className="artisan-list">
          {filtered.map((artisan) => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      ) : (
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Aucun artisan trouvé.</p>
      )}
    </div>
  );
}

export default ArtisanList;
