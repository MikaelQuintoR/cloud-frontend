import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dni, setDni] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro con:', { firstName, lastName, dni, phone, email });
    navigate('/');
  };

  const handleLoginRedirect = () => {
    navigate('/');
  };

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
      textAlign: 'center',
    } as React.CSSProperties,
    input: {
      width: '100%',
      height: '30px',
      backgroundColor: 'white',
      border: '1px solid black',
      borderRadius: '10px',
      textAlign: 'center' as React.CSSProperties['textAlign'],
      color: 'black',
    },
    inputRow: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        marginTop: '1rem',
        width: '100%',
      } as React.CSSProperties,
      
    inputHalf: {
        width: '100%',
        height: '30px',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '10px',
        textAlign: 'center' as React.CSSProperties['textAlign'],
        color: 'black',
        flex: 1,
      } as React.CSSProperties,
      
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
    loginContainer: {
      marginTop: '1rem',
      textAlign: 'center' as const,
    },
    loginText: {
      fontSize: '0.875rem', // Tamaño reducido
      color: 'black',
    },
    loginLink: {
      fontSize: '0.875rem', // Tamaño reducido
      color: '#3f6cfd',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.box}>
        <form onSubmit={handleSubmit}>
          <h2 style={styles.title}>Regístrate:</h2>
          <img src={logo} alt="logo" style={styles.logo} />
          <div style={{ marginTop: '1rem' }}>
        <div style={styles.inputRow}>
            <div style={{ flex: 1 }}>
            <label style={styles.label}>Nombres:</label>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Juan"
                required
                style={styles.inputHalf}
            />
            </div>
            <div style={{ flex: 1 }}>
            <label style={styles.label}>Apellidos:</label>
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Pérez"
                required
                style={styles.inputHalf}
            />
            </div>
        </div>
        </div>
          <div style={{ marginTop: '1rem' }}>
            <label style={styles.label}>Correo Electrónico:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@example.com"
              required
              style={styles.input}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label style={styles.label}>DNI:</label>
            <br />
            <input
              type="text"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              placeholder="12345678"
              required
              style={styles.input}
            />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <label style={styles.label}>Número de Teléfono:</label>
            <br />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="987654321"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Registrarse
          </button>
        </form>
        <div style={styles.loginContainer}>
          <span style={styles.loginText}>¿Ya estás registrado? </span>
          <span
            style={styles.loginLink}
            onClick={handleLoginRedirect}
          >
            Loguéate
          </span>
        </div>
      </div>
    </div>
  );
}