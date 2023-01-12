import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Privacy } from './pages';
import './App.css'


function App() {

  const renderLoader = () => 'loading...'

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
