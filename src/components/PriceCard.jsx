import React from 'react';
import PriceChangeIndicator from './PriceChangeIndicator';

const PriceCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.productName}>{product.name}</h3>
      <div style={styles.priceInfo}>
        <div>
          <p style={styles.label}>Today's Price</p>
          <p style={styles.todayPrice}>{product.today_price} RWF/{product.unit}</p>
        </div>
        <div>
          <p style={styles.label}>Yesterday's Price</p>
          <p style={styles.yesterdayPrice}>{product.yesterday_price} RWF/{product.unit}</p>
        </div>
      </div>
      <PriceChangeIndicator 
        todayPrice={product.today_price} 
        yesterdayPrice={product.yesterday_price} 
      />
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  productName: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1f2937'
  },
  priceInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem'
  },
  label: {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '0.25rem'
  },
  todayPrice: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#2563eb'
  },
  yesterdayPrice: {
    fontSize: '1rem',
    color: '#6b7280'
  }
};

export default PriceCard;
