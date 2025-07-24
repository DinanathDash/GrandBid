# 🧙‍♂️ GrandBid - Wizarding Auction League

<div align="center">
  <p>
    <img src="./src/assets/logo.png" alt="GrandBid Logo" width="180" />
  </p>
  <p><strong>Where Magic Meets Strategy</strong></p>
  <p>A fantasy auction platform inspired by the wizarding world of Harry Potter</p>
  
  [![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite)](https://vitejs.dev/)
  [![Firebase](https://img.shields.io/badge/Firebase-12.0.0-orange?logo=firebase)](https://firebase.google.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
</div>

## 📖 Overview

GrandBid is an immersive fantasy auction platform where users can participate in a wizarding-themed bidding experience. The application allows users to take on different roles:

- **House Organizers**: Create and manage magical tournaments and auctions
- **House Bidders**: Build strategic teams by bidding on wizards
- **Wizard Players**: Register as magical athletes showcasing talents and abilities

With a rich, magical UI featuring house-themed colors, animated elements, and an intuitive interface, GrandBid brings the wizarding auction experience to life.

## ✨ Features

### 🏰 Multi-Role Authentication System
- **House Organizers**: Create and manage wizarding tournaments
- **House Bidders**: Participate in magical auctions and build wizard teams
- **Wizard Players**: Register and showcase magical abilities
- **Google OAuth Integration** with Firebase Authentication

### 🎯 Core Functionality
- **Real-time Auction Dashboard**: Live bidding interface with magical UI elements
- **Wizard Management**: Comprehensive player profiles with stats and ratings
- **House Competition**: Strategic team building and competition tracking
- **Responsive Design**: Fully responsive magical interface with Harry Potter theming

### 🎨 Magical UI/UX
- **Harry Potter Inspired Design**: Complete with house colors, magical particles, and themed animations
- **Radix UI Components**: Modern, accessible component library with custom magical styling
- **Dark Theme**: Immersive dark magical atmosphere with golden accents
- **Smooth Animations**: Framer Motion powered animations and transitions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project (for authentication and database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DinanathDash/GrandBid.git
   cd GrandBid
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Firebase configuration:
   ```env
   VITE_FIREBASE_API=your-api-key-here
   VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
   VITE_FIREBASE_APP_ID=1:123456789:web:abcdefghijklmnop
   VITE_FIREBASE_MEASUREMENT_ID=G-ABCDEFGHIJ
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - Modern React with hooks and context
- **Vite 7.0.4** - Lightning-fast build tool and dev server
- **React Router DOM 7.7.0** - Client-side routing
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **Framer Motion 12.23.6** - Animation library

### UI Components
- **Radix UI** - Accessible component primitives
- **Shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Beautiful icon library
- **Styled Components** - CSS-in-JS styling

### Backend & Database
- **Firebase 12.0.0** - Backend-as-a-Service
  - Authentication (Email/Password, Google OAuth)
  - Firestore Database
  - Cloud Storage
  - Hosting

### Development Tools
- **ESLint** - Code linting with React-specific rules
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components with magical theming
│   ├── Footer.jsx      # Site footer with magical elements
│   ├── Navigation.jsx  # Main navigation component
│   ├── LoadingScreen.jsx
│   └── ProtectedRoute.jsx
├── pages/              # Page components
│   ├── auth/           # Authentication pages
│   │   ├── BidderLogin.jsx
│   │   ├── OrganizerLogin.jsx
│   │   ├── PlayerLogin.jsx
│   │   └── PreSignUp.jsx
│   ├── bidder/         # Bidder dashboard and features
│   │   ├── BidderApp.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Navigation.jsx
│   │   ├── Players.jsx
│   │   └── PlayerInfo.jsx
│   └── landing/        # Landing page sections
│       ├── index.jsx
│       ├── HeroSection.jsx
│       ├── HowItWorksSection.jsx
│       ├── ChooseRoleSection.jsx
│       └── AboutSection.jsx
├── contexts/           # React contexts
│   └── AuthContext.jsx
├── hooks/              # Custom React hooks
│   ├── use-mobile.js
│   ├── use-profile-image.js
│   └── use-scrollbar-visibility.js
├── lib/                # Utility libraries
│   ├── auth.js         # Firebase authentication utilities
│   ├── firebase.js     # Firebase configuration
│   ├── smooth-scroll.js
│   └── utils.js
├── assets/             # Static assets
│   ├── bg.jpg          # Background images
│   ├── logo.png        # Application logo
│   └── magical-quill.jpg
└── App.jsx             # Main application component
```

## 🔒 Authentication Flow

The application implements a secure and intuitive authentication system:

1. **Role Selection**: Users choose between Organizer, Bidder, or Player
2. **Registration/Login**: Email/password or Google OAuth 
3. **Profile Setup**: Role-specific onboarding
4. **Dashboard Access**: Role-specific interfaces

## 🧙‍♂️ User Roles & Features

### 🏛️ House Organizers
- Create and manage magical tournaments
- Set up auction rules and wizard pools
- Monitor live bidding activities
- Generate reports and analytics

### 🎯 House Bidders
- **Dashboard**: View ongoing auctions, spending analytics, and team performance
- **Wizard Roster**: Browse available wizards, place bids, and manage your team
- **Player Profiles**: Detailed wizard statistics and performance metrics
- **Real-time Bidding**: Live auction interface with instant updates

### ⚡ Wizard Players
- Create detailed magical profiles
- Showcase spells, achievements, and statistics
- Join tournaments and auctions
- Track performance and ratings

## 🎨 Magical Design System

### Color Palette
- **Primary**: Magical gold/amber tones (#F59E0B, #D97706)
- **Background**: Deep dark blues (#06131D, #0f172a)
- **House Colors**: 
  - Gryffindor: #DC2626 (Red)
  - Slytherin: #059669 (Green)
  - Ravenclaw: #2563EB (Blue)
  - Hufflepuff: #CA8A04 (Yellow)

### Typography
- **Headers**: Cinzel (Serif) - For magical, ancient feel
- **Body**: Garamond - Classic, readable serif
- **UI Elements**: Modern sans-serif for readability

### Animations
- Magical particle effects
- Smooth page transitions
- Hover animations with magical sparkles
- Loading animations with themed elements

## 🚀 Deployment

### Firebase Hosting (Recommended)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Deploy
npm run build
firebase deploy
```

### Other Platforms
- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop build folder or connect repository

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please check out our [Contributing Guidelines](CONTRIBUTING.md) for details on how to get started.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Harry Potter Universe** - Inspiration for magical theming
- **Shadcn/ui** - Beautiful component library
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Backend infrastructure

---

<div align="center">
  <p>Created with ✨ and 🪄 by <a href="https://github.com/DinanathDash">DinanathDash</a></p>
  <p>© 2025 GrandBid. All magical rights reserved.</p>
</div>
