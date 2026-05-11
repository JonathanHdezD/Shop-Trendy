import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Star, Users, Award, Sparkles, ShieldCheck } from 'lucide-react';

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">
          Viste con elegancia.<br />
          <span>Exclusividad y estilo.</span>
        </h1>

        <p className="landing-description">
          Descubre las últimas tendencias en moda premium.
          Prendas exclusivas, vestidos elegantes y accesorios de diseñador
          para destacar tu identidad en cada momento.
        </p>

        <div className="landing-actions">
          <Link to="/shop" className="btn-primary-large">
            Ver Colección Completa <ArrowRight size={20} />
          </Link>
          <a href="#featured" className="btn-secondary-large">
            Lo Más Destacado <ShoppingBag size={20} />
          </a>
        </div>
      </div>

      {/* Boutique Image Showcase */}
      <div className="boutique-showcase" id="featured">
        <h3 className="showcase-title">Nuestras Categorías Exclusivas</h3>
        <div className="showcase-grid">
          <div className="showcase-card">
            <div className="showcase-image-wrapper">
              <img src="/womens_clothing.png" alt="Moda Mujer" className="showcase-image" />
            </div>
            <div className="showcase-info">
              <h4>Moda Femenina</h4>
              <p>Vestidos de gala y alta costura</p>
              <Link to="/shop" className="showcase-link">Explorar <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="showcase-card highlight-card">
            <div className="showcase-image-wrapper">
              <img src="/mens_clothing.png" alt="Moda Hombre" className="showcase-image" />
            </div>
            <div className="showcase-info">
              <h4>Moda Masculina</h4>
              <p>Trajes modernos y estilo urbano premium</p>
              <Link to="/shop" className="showcase-link">Explorar <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="showcase-card">
            <div className="showcase-image-wrapper">
              <img src="/accessories.png" alt="Accesorios" className="showcase-image" />
            </div>
            <div className="showcase-info">
              <h4>Accesorios de Lujo</h4>
              <p>Bolsos de cuero y relojería fina</p>
              <Link to="/shop" className="showcase-link">Explorar <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-stats">
        <div className="stat-item">
          <div className="stat-icon-wrap">
            <Users size={22} strokeWidth={1.5} />
          </div>
          <div className="stat-text">
            <h4>10k+</h4>
            <p>Clientes Satisfechos</p>
          </div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <div className="stat-icon-wrap gold">
            <Star size={22} fill="#facc15" stroke="none" />
          </div>
          <div className="stat-text">
            <h4>4.9 <span className="stat-sub">/ 5</span></h4>
            <p>Calificación Promedio</p>
          </div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <div className="stat-icon-wrap">
            <Sparkles size={22} strokeWidth={1.5} />
          </div>
          <div className="stat-text">
            <h4>500+</h4>
            <p>Diseños Exclusivos</p>
          </div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <div className="stat-icon-wrap">
            <ShieldCheck size={22} strokeWidth={1.5} />
          </div>
          <div className="stat-text">
            <h4>100%</h4>
            <p>Compra Segura</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
