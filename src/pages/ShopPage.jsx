import React, { useState, useMemo } from 'react';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';
import { products as initialProducts } from '../data/products';

function ShopPage({ cart, addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [priceRange, setPriceRange] = useState(3000);

  // Filter products based on search, category, and price
  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      // Category filter
      const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
      
      // Search filter
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price filter
      const matchesPrice = product.price <= priceRange;

      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <main className="main-content">
      <Sidebar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      
      <ProductGrid 
        products={filteredProducts} 
        onAddToCart={handleAddToCart}
      />
    </main>
  );
}

export default ShopPage;
