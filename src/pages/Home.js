import React from 'react';
import data from '../data/artisans.json';
import ArtisanCard from '../components/ArtisanCard';
import '../App.css';

function Home() {
  return (
    <div className="page-container">
      <section className="text-center my-4">
        <h2>Comment trouver mon artisan ?</h2>
        <ol className="text-start w-75 mx-auto">
          <li>Choisir la catégorie d’artisanat dans le menu.</li>
          <li>Choisir un artisan.</li>
          <li>Le contacter via le formulaire de contact.</li>
        </ol>
      </section>

      <section className="text-center">
        <h3>Artisans du mois</h3>
        <div className="artisan-list">
          {data.map(artisan => (
            <ArtisanCard key={artisan.id} artisan={artisan} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
