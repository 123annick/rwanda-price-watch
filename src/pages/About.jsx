import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Rwanda Price Watch</h1>
      
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.text}>
          Rwanda Price Watch is dedicated to helping Rwandans make informed purchasing 
          decisions by providing up-to-date price information for essential food items 
          across major markets in Rwanda.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>The Problem We Solve</h2>
        <p style={styles.text}>
          Many Rwandans face challenges in tracking food prices:
        </p>
        <ul style={styles.list}>
          <li>Prices vary widely between markets and districts</li>
          <li>People often overpay due to lack of centralized price information</li>
          <li>Households struggle to plan budgets with unpredictable price changes</li>
          <li>No simple digital tool exists to check daily prices</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Markets We Cover</h2>
        <div style={styles.marketsGrid}>
          <div style={styles.marketItem}>
            <h3>Kimironko Market</h3>
            <p>Kigali</p>
          </div>
          <div style={styles.marketItem}>
            <h3>Nyabugogo Market</h3>
            <p>Kigali</p>
          </div>
          <div style={styles.marketItem}>
            <h3>Musanze Market</h3>
            <p>Northern Province</p>
          </div>
          <div style={styles.marketItem}>
            <h3>Huye Market</h3>
            <p>Southern Province</p>
          </div>
          <div style={styles.marketItem}>
            <h3>Rubavu Market</h3>
            <p>Western Province</p>
          </div>
          <div style={styles.marketItem}>
            <h3>Kayonza Market</h3>
            <p>Eastern Province</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <p style={styles.text}>
          Our platform displays daily updated prices for common food products across major 
          markets. We show you today's prices compared to yesterday's prices, with clear 
          indicators showing whether prices have increased, decreased, or stayed the same.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Developer</h2>
        <p style={styles.text}>
          Created by Annick Ujeneza as part of a capstone project to demonstrate practical 
          web development skills and create a useful tool for the Rwandan community.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem 1rem'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '2rem',
    textAlign: 'center'
  },
  section: {
    marginBottom: '3rem'
  },
  sectionTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: '1rem'
  },
  text: {
    fontSize: '1.125rem',
    color: '#4b5563',
    lineHeight: '1.75',
    marginBottom: '1rem'
  },
  list: {
    fontSize: '1.125rem',
    color: '#4b5563',
    lineHeight: '1.75',
    paddingLeft: '2rem'
  },
  marketsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem'
  },
  marketItem: {
    backgroundColor: '#f3f4f6',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center'
  }
};

export default About;
