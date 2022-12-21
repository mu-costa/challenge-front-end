import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/details/:username" element={ <Details /> } />
    </Routes>
  );
}

export default App;
