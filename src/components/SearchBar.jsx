import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="🔍 Search for products (e.g., Beans, Rice)..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  container: {
    marginBottom: '2rem',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto 2rem'
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    outline: 'none',
    transition: 'border-color 0.3s'
  }
};

export default SearchBar;
