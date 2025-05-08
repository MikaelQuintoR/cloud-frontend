import { useNavigate } from 'react-router-dom';
import Sidebar from '../utilities/sidebar'; // Sidebar como Navbar
import { SidebarItem } from '../utilities/sidebaritem'; // Items del Sidebar
import { Home, User, Settings, Plus } from 'lucide-react'; // Iconos de ejemplo


export default function MainPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5',
        color: '#333',
      }}
    >
      {/* Sidebar como Navbar */}
      <Sidebar>
        <SidebarItem icon={<Home />} text="Inicio" active onClick={()=>navigate('/mainPage')}/>
        <SidebarItem icon={<Plus />} text="Agregar" onClick={()=>navigate('/agregar')}/>
        <SidebarItem icon={<Settings />} text="Configuración" />
      </Sidebar>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <h1>Bienvenido a la Página Principal</h1>
        <p>Esta es una página básica de ejemplo.</p>
      </div>
    </div>
  );
}