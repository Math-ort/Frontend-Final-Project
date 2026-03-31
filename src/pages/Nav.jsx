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
          <Link to="/hombre">Hombre</Link>
          <Link to="/mujer">Mujer</Link>
          <Link to="/categoria/accesorios">Accesorios</Link>
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