import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Layout from './components/Layout';
import Features from './pages/Features';
import Home from './pages/Home';
import Templates from './pages/Templates';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Account from './pages/Account';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="features" element={<PageTransition><Features /></PageTransition>} />
          <Route path="templates" element={<PageTransition><Templates /></PageTransition>} />
          <Route path="pricing" element={<PageTransition><Pricing /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="account" element={<PageTransition><Account /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
