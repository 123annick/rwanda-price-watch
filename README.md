# 🛒 Rwanda Price Watch

A web application that helps Rwandans track daily food prices across major markets in Rwanda, enabling informed purchasing decisions and better budget planning.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![React](https://img.shields.io/badge/React-18.x-blue.svg)

---

## 📖 Table of Contents

- [About](#about)
- [Problem Statement](#problem-statement)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Markets Covered](#markets-covered)
- [Future Enhancements](#future-enhancements)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## 🎯 About

Rwanda Price Watch is a React-based web application designed to address the challenge of price transparency in Rwanda's food markets. Many Rwandans struggle to know the real prices of essential food items as prices change frequently across different markets. This application provides up-to-date price information, highlights daily changes, and covers major markets nationwide.

---

## ❗ Problem Statement

Rwandans face several challenges regarding food price awareness:

- 📍 Prices vary widely between markets and districts
- 💰 People often overpay because there is no centralized source of price information
- 📊 Households struggle to plan budgets due to unpredictable price changes
- 🔍 There is no simple digital tool to check daily prices

**Rwanda Price Watch solves this** by offering daily updated price information in one centralized, easy-to-use platform.

---

## ✨ Features

### Core Features
- ✅ **View Daily Prices** - Check current prices for common food products (beans, rice, tomatoes, potatoes, etc.)
- ✅ **Market Selection** - Browse and select from 6 major markets across Rwanda
- ✅ **Automatic Price Change Detection**:
  - 🔼 Price increased (Red)
  - 🔽 Price decreased (Green)
  - ➖ No change (Grey)
- ✅ **Price Statistics Dashboard** - View summary of price changes at a glance
- ✅ **Search Functionality** - Filter markets and products by name
- ✅ **Timestamps** - See when each market was last updated
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

### User Benefits
- Make informed purchasing decisions
- Save money by comparing prices across markets
- Plan household budgets more effectively
- Track price trends over time

---

## 🛠️ Technologies Used

- **React** (v18.x) - Frontend framework
- **React Router DOM** - Navigation and routing
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling and animations
- **Git & GitHub** - Version control
- **Mock API** - Simulated data source (ready for real API integration)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/YOUR_USERNAME/rwanda-price-watch.git
```

2. **Navigate to project directory**
```bash
   cd rwanda-price-watch
```

3. **Install dependencies**
```bash
   npm install
```

4. **Start development server**
```bash
   npm start
```

5. **Open in browser**
```
   http://localhost:3000
```

---

## 📱 Usage

### Viewing Market Prices

1. **Home Page** - View all 6 markets with quick overview
2. **Click any market card** - Navigate to detailed price information
3. **Use search bar** - Filter markets or products by name
4. **Check statistics** - View how many products increased, decreased, or stayed the same
5. **Compare prices** - See today's vs yesterday's prices at a glance

### Navigation

- **Home** - View all markets
- **About** - Learn about the project and its purpose
- **Market Details** - Click any market to see detailed prices

---

## 📂 Project Structure
```
rwanda-price-watch/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── Footer.jsx           # Footer component
│   │   ├── MarketCard.jsx       # Individual market card
│   │   ├── PriceCard.jsx        # Product price display
│   │   ├── PriceChangeIndicator.jsx  # Price change icon/color
│   │   ├── PriceStats.jsx       # Statistics dashboard
│   │   └── SearchBar.jsx        # Search functionality
│   ├── pages/
│   │   ├── Home.jsx             # Main markets page
│   │   ├── MarketDetails.jsx   # Individual market page
│   │   └── About.jsx            # About/info page
│   ├── services/
│   │   └── api.js               # API service & utilities
│   ├── data/
│   │   └── mockData.json        # Mock market data
│   ├── App.js                   # Main app component
│   ├── App.css                  # Global styles
│   └── index.js                 # Entry point
├── package.json
├── README.md
└── .gitignore
```

---

## 🗺️ Markets Covered

The application currently tracks prices from 6 major markets across all provinces of Rwanda:

| Market | Location | Province |
|--------|----------|----------|
| **Kimironko Market** | Kigali | Kigali City |
| **Nyabugogo Market** | Kigali | Kigali City |
| **Musanze Market** | Musanze | Northern Province |
| **Huye Market** | Huye | Southern Province |
| **Rubavu Market** | Rubavu | Western Province |
| **Kayonza Market** | Kayonza | Eastern Province |

These markets represent Rwanda's major commercial hubs, ensuring comprehensive price coverage across the country.

---

## 🔮 Future Enhancements

Potential features for future versions:

- 📈 **7-day Price Trend Charts** - Visualize price changes over a week
- 🔔 **Price Alerts** - Notify users when prices change significantly
- 🌍 **More Markets** - Expand coverage to additional districts
- 🔌 **Real API Integration** - Connect to live government or market data sources
- 📊 **Price Comparison Tool** - Compare the same product across multiple markets
- 📤 **Export Functionality** - Download price data as CSV/PDF
- 🌙 **Dark Mode** - Eye-friendly theme for night browsing
- 🇬🇧🇫🇷🇷🇼 **Multi-language Support** - English, French, and Kinyarwanda
- 👤 **User Accounts** - Save favorite markets and get personalized alerts

---

## 👨‍💻 Author

**Annick Ujeneza**

- GitHub:https://github.com/123annick
- LinkedIn: https://www.linkedin.com/in/annick-ujeneza-77667526b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_contact_details%3BkcAIwax%2FRi6Hl5r2RideDQ%3D%3D
- Email: annickujeneza4@gmail.com

---

## 🙏 Acknowledgments

- **ALX Software Engineering Program** - For the capstone project opportunity and guidance
- **Rwanda Ministry of Trade** - For inspiration on addressing price transparency
- **React Community** - For excellent documentation and resources
- **All testers and reviewers** - For valuable feedback

---

## 📄 License

This project is open source and available for educational purposes.

---

## 📞 Contact & Feedback

If you have any questions, suggestions, or feedback, please feel free to:
- Open an issue on GitHub
- Contact me directly via email
- Submit a pull request with improvements

---

**Built with ❤️ for Rwanda** 🇷🇼

*This project was created as part of the ALX Software Engineering Capstone Project (December 2025)*
