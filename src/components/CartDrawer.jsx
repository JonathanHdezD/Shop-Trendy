import React from 'react';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, clearCart }) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const total = subtotal; // Assuming free shipping as per mock

  return (
    <div className="cart-drawer-overlay" onClick={onClose}>
      <div className="cart-drawer" onClick={e => e.stopPropagation()}>
        <div className="cart-drawer-header">
          <div>
            <h2 className="modal-title">Carrito de Compras</h2>
            <p className="modal-subtitle" style={{marginBottom: 0}}>Revisa y administra los productos en tu carrito</p>
          </div>
          <button className="modal-close-btn" style={{position: 'static'}} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="cart-drawer-content">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={80} color="#ccc" strokeWidth={1} />
              <h3>Tu carrito está vacío</h3>
              <p>Agrega productos para comenzar tu compra</p>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map(item => (
                <div key={item.cartId || item.id} className="cart-item">
                  <div className="cart-item-image-wrapper">
                    <img src={item.image} alt={item.title} className="cart-item-image" />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <h4>{item.title}</h4>
                      <button className="cart-item-remove" onClick={() => removeFromCart(item.cartId || item.id)}>
                        <X size={16} />
                      </button>
                    </div>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                    <div className="qty-selector">
                      <button onClick={() => updateQuantity(item.cartId || item.id, item.quantity - 1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.cartId || item.id, item.quantity + 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary-row">
              <span className="summary-label">Envío</span>
              <span className="summary-value">Gratis</span>
            </div>
            <div className="cart-summary-row total-row">
              <span className="summary-label">Total</span>
              <span className="summary-value">${total.toFixed(2)}</span>
            </div>
            <button 
              className="btn-primary-full mt-4" 
              onClick={() => {
                alert("¡Compra realizada con éxito!");
                clearCart();
                onClose();
              }}
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
