// Error404.jsx
import { Link } from 'react-router-dom';
import '../styles/Error404.css'; 

function Error404() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>{'Oups! La page que vous demandez n\'existe pas.'}</p>

      <Link to="/" className="error-link">{'Retourner sur la page d\'accueil'}</Link>
    </div>
  );
}
export default Error404