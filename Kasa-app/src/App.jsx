// Kasa-app\src\App.jsx
import './styles/App.css';
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import FicheLogement from './pages/FicheLogement.jsx';
import Error404 from './pages/Error404.jsx';

function App() {
    return (
        <Router>
            <div>
                <Banner />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:id" element={<FicheLogement />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
*/
//Kasa-app\src\App.jsx
// App.jsx
import { Outlet } from 'react-router-dom';
import Banner from './compoments/Banner.jsx';
import Footer from './compoments/Footer.jsx';

function App() {
  return (
    <div>
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

