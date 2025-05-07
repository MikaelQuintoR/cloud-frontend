import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login con:', { email, password });

    navigate('/mainPage');
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: 'white',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ width: '300px', textAlign: 'center', color: 'black' }}
      >
        <h2 style={{ color: 'black' }}>Identifícate:</h2>
        <img
          src={logo}
          alt="logo"
          style={{
            display: 'block', // Asegura que el logo sea tratado como un bloque
            margin: '0 auto', // Centra el logo horizontalmente
            width: '200px',
            height: 'auto',
            marginBottom: '1rem',
          }}
        />
        <div>
          <label style={{ color: 'black' }}>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="celsito@celsa.com.pe"
            required
            style={{
              width: '100%',
              height: '20px',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '10px',
              textAlign: 'center',
              borderColor: 'black',
              color: 'black',
            }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label style={{ color: 'black' }}>Contraseña:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="contraseña"
            required
            style={{
              width: '100%',
              height: '20px',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              borderRadius: '10px',
              textAlign: 'center',
              borderColor: 'black',
              color: 'black',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: '1.5rem',
            width: '100%',
            backgroundColor: '#f73317',
            color: 'white',
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}