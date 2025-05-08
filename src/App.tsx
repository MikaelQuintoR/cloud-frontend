import { Routes, useNavigate,Route } from 'react-router-dom';
import Sidebar from './utilities/sidebar';
import { SidebarItem } from './utilities/sidebaritem';
import { Home, User, Settings } from 'lucide-react'; 
import Login from './pages/login';
import MainPage from './pages/mainPage';
import Add from './pages/agregar'; 
import Register from './pages/register'; 
export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path='/agregar' element={<Add />} />
      <Route path='/register' element={<Register/>}/>
    </Routes>
  );
}