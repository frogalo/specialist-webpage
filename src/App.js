import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import BecomeExpertPage from './pages/BecomeExpertPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/become-an-expert" element={<BecomeExpertPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
