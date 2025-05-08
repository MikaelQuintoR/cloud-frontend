import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login con:', { email, password });
    navigate('/mainPage');
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes backgroundAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const styles = {
    background: {
      height: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(270deg, #3364ff, #003366, #00cfff)',
      backgroundSize: '600% 600%',
      animation: 'backgroundAnimation 15s infinite alternate',
    } as React.CSSProperties,
    box: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.15)',
      width: '320px',
      textAlign: 'center' as const,
    } as React.CSSProperties,
    input: {
      width: '100%',
      height: '30px',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      textAlign: 'center' as 'center',
      color: 'black',
    },
    button: {
      marginTop: '1.5rem',
      width: '100%',
      backgroundColor: '#3364ff',
      color: 'white',
      padding: '0.5rem',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    label: {
      color: 'black',
    },
    logo: {
      display: 'block',
      margin: '0 auto',
      width: '200px',
      height: 'auto',
      marginBottom: '1rem',
    },
    title: {
      color: 'black',
    },
    registerContainer: {
      marginTop: '1rem',
      textAlign: 'center' as const,
    },
    registerText: {
      display: 'inline-block',
      marginRight: '0.5rem',
      color: 'black',
      fontSize: '0.87rem'
    },
    registerLink: {
      color: '#3f6cfd',
      textDecoration: 'underline',
      cursor: 'pointer',
      fontSize: '0.87rem'
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.box}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Identifícate:</h2>
          <img src={logo} alt="logo" style={styles.logo} />
          <div>
            <label style={styles.label}>Email:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="medigo@gmail.com"
              required
              style={styles.input as React.CSSProperties}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label style={styles.label}>Contraseña:</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="contraseña"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
        <div style={styles.registerContainer}>
          <span style={styles.registerText}>¿Aún no estás registrado?</span>
          <span
            style={styles.registerLink}
            onClick={handleRegisterRedirect}
          >
            Regístrate
          </span>
        </div>
      </div>
    </div>
  );
}