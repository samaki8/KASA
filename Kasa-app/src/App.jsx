// Kasa-app\src\App.jsx
import './styles/App.css';
import { Outlet } from 'react-router-dom';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Banner />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

