import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import LandingPage from './pages/landing';
import Page from './pages/page';

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/page">Search</NavLink>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
