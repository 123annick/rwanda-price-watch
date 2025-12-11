import React from 'react';
import { calculatePriceChange } from '../services/api';

const PriceChangeIndicator = ({ todayPrice, yesterdayPrice }) => {
  const { change, percentage, status } = calculatePriceChange(todayPrice, yesterdayPrice);

  const getColor = () => {
    if (status === 'increased') return '#ef4444'; // red
    if (status === 'decreased') return '#22c55e'; // green
    return '#6b7280'; // grey
  };

  const getIcon = () => {
    if (status === 'increased') return '🔼';
    if (status === 'decreased') return '🔽';
    return '➖';
  };

  return (
    <div style={{ ...styles.container, color: getColor() }}>
      <span style={styles.icon}>{getIcon()}</span>
      <span style={styles.text}>
        {change !== 0 ? `${Math.abs(change)} RWF (${percentage}%)` : 'No change'}
      </span>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: '600'
  },
  icon: {
    fontSize: '1rem'
  },
  text: {
    
  }
};

export default PriceChangeIndicator;
