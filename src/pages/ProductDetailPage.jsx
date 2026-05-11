import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, StarHalf, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function ProductDetailPage({ cart, addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  
  useEffect(() => {
    // Scroll to top when loading new product
    window.scrollTo(0, 0);
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return <div className="product-not-found">Producto no encontrado</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize, quantity });
  };

  // Dummy related products (excluding the current one)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="product-detail-container">
      <div className="breadcrumb">
        <Link to="/">Inicio</Link> / <span>{product.title}</span>
      </div>

      <div className="product-main-section">
        {/* Left Column: Images */}
        <div className="product-gallery">
          <div className="main-image-container">
            <img src={product.image} alt={product.title} className="main-image" />
          </div>
          <div className="thumbnail-list">
            <img src={product.image} alt="thumb 1" className="thumbnail active" />
            <img src={product.image} alt="thumb 2" className="thumbnail" />
            <img src={product.image} alt="thumb 3" className="thumbnail" />
          </div>
        </div>

        {/* Right Column: Info */}
        <div className="product-info-section">
          <span className="category-pill">{product.category}</span>
          <h1 className="product-title-large">{product.title}</h1>
          
          <div className="product-rating">
            <div className="stars">
              <Star fill="#facc15" stroke="none" size={16} />
              <Star fill="#facc15" stroke="none" size={16} />
              <Star fill="#facc15" stroke="none" size={16} />
              <Star fill="#facc15" stroke="none" size={16} />
              <StarHalf fill="#facc15" stroke="none" size={16} />
            </div>
            <span className="rating-text">4.7 (3 reseñas)</span>
          </div>

          <div className="product-price-large">
            ${product.price.toFixed(2)}
          </div>
          
          <p className="product-short-desc">
            {product.description}
          </p>

          <div className="size-selector">
            <p className="selector-title">Selecciona tu talla</p>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button 
                  key={size} 
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <p className="selector-title">Cantidad</p>
            <div className="qty-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn-add-to-cart" onClick={handleAddToCart} disabled={product.isSoldOut}>
              <ShoppingCart size={18} /> Agregar al Carrito
            </button>
            <button className="btn-buy-now" disabled={product.isSoldOut}>
              Comprar Ahora
            </button>
          </div>

          <div className="features-list">
            <div className="feature-item">
              <Truck size={20} className="feature-icon" />
              <div>
                <strong>Envío Gratis</strong>
                <p>En pedidos superiores a $00</p>
              </div>
            </div>
            <div className="feature-item">
              <RotateCcw size={20} className="feature-icon" />
              <div>
                <strong>Devoluciones Fáciles</strong>
                <p>30 días para devoluciones</p>
              </div>
            </div>
            <div className="feature-item">
              <ShieldCheck size={20} className="feature-icon" />
              <div>
                <strong>Compra Segura</strong>
                <p>Pago 100% protegido</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs">
        <div className="tab-headers">
          <button className="tab-btn active">Descripción</button>
          <button className="tab-btn">Detalles</button>
          <button className="tab-btn">Reseñas (3)</button>
        </div>
        <div className="tab-content">
          <h4>Descripción del Producto</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada, purus eleifend integer aliquam risus auctor viverra erat metus, maecenas
            montes mus hendrerit phasellus tellus vehicula. Ultricies aptent malesuada arcu tempus ultrices leo ullamcorper faucibus, bibendum
            ante nibh scelerisque per nisl eget pellentesque facilisis, mus metus sem laoreet in non a.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <div className="related-header">
          <ShoppingCart className="icon-light" size={24} color="#e5e5e5" />
          <h3>También te puede interesar</h3>
        </div>
        <div className="related-grid">
          {relatedProducts.map(rp => (
            <ProductCard 
              key={rp.id} 
              product={rp} 
              onAddToCart={() => addToCart(rp)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
