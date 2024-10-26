import React from 'react'; // Import React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './pages/Home'; // Import Home page component
import Login from './pages/Login'; // Import Login page component
import Register from './pages/Register'; // Import Register page component
import Profile from './pages/Profile'; // Import Profile page component
import ItemList from './pages/ItemList'; // Import ItemList page component
import Feedback from './pages/Feedback'; // Import Feedback page component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render Navbar */}
      <Routes>
        {/* Define routes for the application */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App; // Export App component
