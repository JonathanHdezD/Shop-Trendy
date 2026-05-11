import React from 'react';
import { Search } from 'lucide-react';

const Sidebar = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  priceRange,
  setPriceRange
}) => {
  
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'ropa-mujer', label: 'Ropa Mujer' },
    { id: 'ropa-hombre', label: 'Ropa Hombre' },
    { id: 'accesorios', label: 'Accesorios' },
    { id: 'calzado', label: 'Calzado' },
  ];

  return (
    <aside className="sidebar">
      {/* Search Section */}
      <div className="filter-section">
        <h3 className="filter-title">Buscar</h3>
        <div className="search-input-wrapper">
          <Search className="search-icon" size={18} />
          <input 
            type="text" 
            className="search-input" 
            placeholder="Buscar productos..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Category Section */}
      <div className="filter-section">
        <h3 className="filter-title">Categoría</h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li 
              key={category.id}
              className={`category-item ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="category-dot"></div>
              {category.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Price Section */}
      <div className="filter-section">
        <div className="price-header">
          <h3 className="filter-title" style={{marginBottom: 0}}>Rango de Precio</h3>
          <span className="price-range-text">$0 - ${priceRange}</span>
        </div>
        <input 
          type="range" 
          min="0" 
          max="3000" 
          step="50"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="price-slider"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
