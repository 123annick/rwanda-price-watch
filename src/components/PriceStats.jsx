import React from 'react';

const PriceStats = ({ products }) => {
  // Calculate statistics
  const totalProducts = products.length;
  const increased = products.filter(p => p.today_price > p.yesterday_price).length;
  const decreased = products.filter(p => p.today_price < p.yesterday_price).length;
  const unchanged = products.filter(p => p.today_price === p.yesterday_price).length;

  const stats = [
    { label: 'Total Products', value: totalProducts, color: '#2563eb', icon: '📦' },
    { label: 'Increased', value: increased, color: '#ef4444', icon: '🔼' },
    { label: 'Decreased', value: decreased, color: '#22c55e', icon: '🔽' },
    { label: 'Unchanged', value: unchanged, color: '#6b7280', icon: '➖' }
  ];

  return (
    <div style={styles.container}>
      {stats.map((stat, index) => (
        <div key={index} style={styles.statCard}>
          <div style={styles.icon}>{stat.icon}</div>
          <div style={styles.value}>{stat.value}</div>
          <div style={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  statCard: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '0.5rem'
  },
  value: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.25rem'
  },
  label: {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '600'
  }
};

export default PriceStats;
