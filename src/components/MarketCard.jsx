import React from 'react';
import { Link } from 'react-router-dom';

const MarketCard = ({ market }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Link to={`/market/${market.id}`} style={styles.link}>
      <div style={styles.card}>
        <h3 style={styles.marketName}>{market.market}</h3>
        <p style={styles.location}>📍 {market.location}</p>
        <p style={styles.productCount}>
          {market.products.length} products available
        </p>
        <p style={styles.updated}>
          Last updated: {formatDate(market.updated_at)}
        </p>
        <button style={styles.button}>View Prices →</button>
      </div>
    </Link>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
  },
  marketName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1f2937'
  },
  location: {
    color: '#6b7280',
    marginBottom: '0.5rem'
  },
  productCount: {
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: '0.5rem'
  },
  updated: {
    fontSize: '0.875rem',
    color: '#9ca3af',
    marginBottom: '1rem'
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600'
  }
};

export default MarketCard;
