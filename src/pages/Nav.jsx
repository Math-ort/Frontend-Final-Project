import "./nav.css";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '../components/SearchIcon';
function Nav() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInput.trim();

    if (query) {
      navigate(`/search/${encodeURIComponent(query)}`);
      setSearchInput("");
    }
  };

  return (
    <nav className="nav">

      <div className="nav-left">
        <Link to="/" className="logo">Shop</Link>

        <div className="nav-links">

          {/* HOMBRE */}
          <div className="nav-item">
            <Link to="/hombre">Hombre</Link>

            <div className="dropdown">
              <Link to="/hombre/camisetas">Camisetas</Link>
              <Link to="/hombre/pantalones">Pantalones</Link>
              <Link to="/hombre/chaquetas">Chaquetas</Link>
              <Link to="/hombre/zapatos">Zapatos</Link>
            </div>
          </div>

          {/* MUJER */}
          <div className="nav-item">
            <Link to="/mujer">Mujer</Link>

            <div className="dropdown">
              <Link to="/mujer/camisetas">Camisetas</Link>
              <Link to="/mujer/pantalones">Pantalones</Link>
              <Link to="/mujer/chaquetas">Chaquetas</Link>
              <Link to="/mujer/zapatos">Zapatos</Link>
            </div>
          </div>

          {/* ACCESORIOS */}
          <div className="nav-item">
            <Link to="/categoria/accesorios">Accesorios</Link>

            <div className="dropdown">
              <Link to="/accesorios/mochilas">Mochilas</Link>
              <Link to="/accesorios/gorras">Gorras</Link>
              <Link to="/accesorios/otros">Accesorios</Link>
            </div>
          </div>

        </div>
      </div>

      <div className="nav-right">
        <Link to="/login">Login</Link>
        <Link to="/cart">🛒</Link>

        <form className="search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>

    </nav>
  );
}

export default Nav;