import * as React from "react";
import { Link } from "react-router-dom";

const navbarStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#f8f9fa',
  borderBottom: '1px solid #dee2e6',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box' as 'border-box', // Use appropriate type assertion
  zIndex: 1000,
};

const logoStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#000',
  textDecoration: 'none',
};

const categoriesStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
};

const categoryLinkStyle: React.CSSProperties = {
  color: '#000',
  textDecoration: 'none',
};

const loginStyle: React.CSSProperties = {
  color: '#007bff',
  textDecoration: 'none',
};

export default function Navbar() {
  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/" style={logoStyle}>Bazaar</Link>
      </div>
      <div style={categoriesStyle}>
        <Link to="/category1" style={categoryLinkStyle}>Inzeráty</Link>
        <Link to="/category2" style={categoryLinkStyle}>Vytvořit inzerát</Link>
        <Link to="/category3" style={categoryLinkStyle}>O nás</Link>
      </div>
      <div>
        <Link to="/login" style={loginStyle}>Login</Link>
      </div>
    </nav>
  );
}
