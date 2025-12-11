import mockData from '../data/mockData.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllMarkets = async () => {
  await delay(500); // Simulate network delay
  return mockData;
};

export const fetchMarketById = async (id) => {
  await delay(500);
  const market = mockData.find(m => m.id === parseInt(id));
  if (!market) {
    throw new Error('Market not found');
  }
  return market;
};

export const calculatePriceChange = (todayPrice, yesterdayPrice) => {
  const change = todayPrice - yesterdayPrice;
  
  return {
    change,
    percentage: yesterdayPrice !== 0 
      ? ((change / yesterdayPrice) * 100).toFixed(1)
      : 0,
    status: change > 0 ? 'increased' : change < 0 ? 'decreased' : 'unchanged'
  };
};





