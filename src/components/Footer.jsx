import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Rwanda Price Watch | Helping Rwandans make informed purchasing decisions</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1e40af',
    color: 'white',
    textAlign: 'center',
    padding: '1.5rem',
    marginTop: 'auto'
  }
};

export default Footer;
