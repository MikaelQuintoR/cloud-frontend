import { useNavigate } from 'react-router-dom';
import Sidebar from '../utilities/sidebar';
import { SidebarItem } from '../utilities/sidebaritem';
import { Home, User, Settings, Plus } from 'lucide-react';

export default function MainPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <Sidebar>
        <SidebarItem icon={<Home />} text="Inicio" onClick={() => navigate('/mainPage')} />
        <SidebarItem icon={<Plus />} text="Agregar" active onClick={() => navigate('/agregar')} />
        <SidebarItem icon={<Settings />} text="Configuración" />
      </Sidebar>

      <div style={styles.mainContent}>
        <h1 style={styles.title}>Agregar Sensor</h1>
        <input type="text" placeholder="Nombre del sensor" style={styles.input} />
        <div style={styles.row}>
          <input type="text" placeholder="Dirección IP" style={styles.inputHalf} />
          <input type="text" placeholder="Puerto" style={styles.inputHalf} />
        </div>
        <button
          style={styles.button}
          onClick={() => console.log('Botón Agregar presionado')}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f5f5f5',
    color: '#333',
  },
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    boxShadow: '0 4px 6 px rgba(0, 0, 0, 0.05)',
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
  },
  row: {
    display: 'flex',
    gap: '10px',
    width: '100%',
    maxWidth: '400px',
  },
  inputHalf: {
    flex: 1,
    padding: '0.5px',
    height: '50px',
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    fontSize: '16px',
    color: '#333',
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
};