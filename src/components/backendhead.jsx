import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">por-vapor</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
        <div className="search-cart">
          <input type="text" placeholder="Search" />
          <span className="cart-icon">🛒</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
