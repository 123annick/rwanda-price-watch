import React, { useState, useEffect } from 'react';
import { fetchAllMarkets } from '../services/api';
import MarketCard from '../components/MarketCard';

const Home = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMarkets = async () => {
      try {
        const data = await fetchAllMarkets();
        setMarkets(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load markets');
        setLoading(false);
      }
    };

    loadMarkets();
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading markets...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Rwanda Price Watch</h1>
        <p style={styles.subtitle}>
          Track daily food prices across major markets in Rwanda
        </p>
      </div>

      <div style={styles.marketsGrid}>
        {markets.map(market => (
          <MarketCard key={market.id} market={market} />
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
  hero: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#6b7280'
  },
  marketsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem'
  },
  loading: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.25rem',
    color: '#6b7280'
  },
  error: {
    textAlign: 'center',
    padding: '3rem',
    fontSize: '1.25rem',
    color: '#ef4444'
  }
};

export default Home;
