import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.png';

function Header() {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value.toLowerCase();
    navigate(`/artisans/recherche?query=${query}`);
  };

  return (
    <header className="bg-primary text-white p-3">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
        <Link to="/">
          {/* <img src={logo} alt="Trouve ton artisan" height="40" /> */}
          <h1>Trouve ton artisan</h1> {/* titre temporaire */}
        </Link>
        <nav className="nav gap-3">
          <Link to="/artisans/batiment" className="nav-link text-white">Bâtiment</Link>
          <Link to="/artisans/services" className="nav-link text-white">Services</Link>
          <Link to="/artisans/fabrication" className="nav-link text-white">Fabrication</Link>
          <Link to="/artisans/alimentation" className="nav-link text-white">Alimentation</Link>
        </nav>
        <form onSubmit={handleSearch} className="d-flex mt-2 mt-md-0">
          <input name="search" type="text" className="form-control me-2" placeholder="Rechercher..." />
          <button className="btn btn-light">🔍</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
