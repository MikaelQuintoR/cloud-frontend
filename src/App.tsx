import { Routes, useNavigate,Route } from 'react-router-dom';
import Sidebar from './utilities/sidebar';
import { SidebarItem } from './utilities/sidebaritem';
import { Home, User, Settings } from 'lucide-react'; // Iconos de ejemplo
import Login from './pages/login';
import MainPage from './pages/mainPage';
import Add from './pages/agregar'; // Asegúrate de que la ruta sea correcta

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path='agregar' element={<Add />} />
    </Routes>
  );
}