import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Privacy } from './pages';
import './fonts/fonts.css'
import NetworkLoader from './components/Loaders/NetworkLoader';


function App() {

  const renderLoader = () => <NetworkLoader />

  return (
    <Suspense fallback={renderLoader()}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
