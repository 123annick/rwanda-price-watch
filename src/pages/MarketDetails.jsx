import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMarketById } from '../services/api';
import PriceCard from '../components/PriceCard';

const MarketDetails = () => {
  const { id } = useParams();
  const [market, setMarket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarket = async () => {
      try {
        const data = await fetchMarketById(id);
        setMarket(data);
        setLoading(false);
      } catch (err) {
        setError('Market not found');
        setLoading(false);
      }
    };

    loadMarket();
  }, [id]);

  if (loading) {
    return <div style={styles.loading}>Loading market data...</div>;
  }

  if (error || !market) {
    return (
      <div style={styles.error}>
        <p>{error}</p>
        <Link to="/" style={styles.backLink}>← Back to Markets</Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Markets</Link>
      
      <div style={styles.header}>
        <h1 style={styles.marketName}>{market.market}</h1>
        <p style={styles.location}>📍 {market.location}</p>
        <p style={styles.updated}>
          Last updated: {formatDate(market.updated_at)}
        </p>
      </div>

      <h2 style={styles.sectionTitle}>Current Prices</h2>
      <div style={styles.pricesGrid}>
        {market.products.map(product => (
          <PriceCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  backLink: {
    display: 'inline-block',
    color: '#2563eb',
    textDecoration: 'none',
    fontSize: '1rem',
    marginBottom: '1.5rem',
    fontWeight: '600'
  },
  header: {
    marginBottom: '2rem'
  },
  marketName: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem'
  },
  location: {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '0.5rem'
  },
  updated: {
    fontSize: '0.875rem',
    color: '#9ca3af'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1.5rem'
  },
  pricesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem'
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.25rem',
    color: '#6b7280'
  },
  error: {
    textAlign: 'center',
    padding: '3rem'
  }
};

export default MarketDetails;
