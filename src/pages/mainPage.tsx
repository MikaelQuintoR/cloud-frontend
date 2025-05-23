import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../utilities/sidebar';
import { SidebarItem } from '../utilities/sidebaritem'; 
import { Home, Plus, Settings, LogOut } from 'lucide-react';
import { buscarMedicosPorEspecialidadYDia } from '../services/microserviceTwo';
import { obtenerHistorialCitas } from '../services/microserviceOne'; 

export default function MainPage() {
  const [especialidad, setEspecialidad] = useState('');
  const [dia, setDia] = useState('');
  const [medicos, setMedicos] = useState<any[]>([]);
  const [historialCitas, setHistorialCitas] = useState<any[]>([]);
  const [userName, setUserName] = useState("Juan Pérez"); 
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const pacienteId = "12345"; 

  const especialidades = ['Cardiología', 'Dermatología', 'Pediatría', 'Ginecología'];
  const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const citas = await obtenerHistorialCitas(pacienteId); 
        setHistorialCitas(citas);
      } catch (error) {
        console.error('Error al obtener el historial de citas', error);
        setErrorMessage('Hubo un problema.');
      }
    };

    fetchData();
  }, [pacienteId]);

  const handleBuscar = async () => {
    if (!especialidad || !dia) {
      setErrorMessage('Por favor selecciona tanto la especialidad como el día.');
      return;
    }
    try {
      const medicosDisponibles = await buscarMedicosPorEspecialidadYDia(especialidad, dia);
      setMedicos(medicosDisponibles);
      setErrorMessage('');
    } catch (error) {
      console.error('Error al obtener médicos', error);
      setErrorMessage('No se encontraron médicos para la especialidad y el día seleccionados.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(145deg, #6e7fcb, #4c6f9b)', // Fondo con gradiente
        color: '#333',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Sidebar>
        <SidebarItem icon={<Home />} text="Inicio" active onClick={() => navigate('/mainPage')} />
        <SidebarItem icon={<Plus />} text="Agregar" onClick={() => navigate('/agregar')} />
        <SidebarItem icon={<Settings />} text="Configuración" onClick={() => navigate('/configuracion')} />
        <SidebarItem icon={<LogOut />} text="Cerrar sesión" onClick={handleLogout} />
      </Sidebar>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '30px',
        }}
      >
        <h1 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '20px' }}>Bienvenido, {userName}!</h1>
        <p style={{ color: '#fff', fontSize: '1.2rem' }}>¡Estamos encantados de tenerte aquí! ¿Qué te gustaría hacer hoy?</p>

        <div
          style={{
            display: 'flex',
            gap: '30px',
            marginTop: '20px',
            height: '100%',
            width: '100%',
            maxWidth: '1000px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: '20px',
              backgroundColor: '#fff', 
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              minHeight: '200px', 
            }}
          >
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Historial de Citas</h3>
            <div
              style={{
                height: '100%',
                overflowY: 'auto',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {historialCitas.length === 0 ? (
                  <li>No tienes citas registradas.</li>
                ) : (
                  historialCitas.map((cita, index) => (
                    <li key={index} style={{ marginBottom: '15px', fontSize: '1rem' }}>
                      <strong>{cita.medico}</strong> ({cita.especialidad}) -{' '}
                      <span>{cita.fecha}</span> - Estado: {cita.estado}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              padding: '20px',
              backgroundColor: '#fff', 
              borderRadius: '15px',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Buscar Médico</h3>
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Especialidad</label>
                <select
                  value={especialidad}
                  onChange={(e) => setEspecialidad(e.target.value)}
                  style={{
                    padding: '12px',
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Selecciona una especialidad</option>
                  {especialidades.map((esp) => (
                    <option key={esp} value={esp}>{esp}</option>
                  ))}
                </select>
              </div>

              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', marginBottom: '10px' }}>Día</label>
                <select
                  value={dia}
                  onChange={(e) => setDia(e.target.value)}
                  style={{
                    padding: '12px',
                    width: '100%',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box',
                  }}
                >
                  <option value="">Selecciona un día</option>
                  {dias.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
            </div>

            <div
              style={{
                marginBottom: '20px',
                padding: '10px',
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                maxHeight: '200px',
                overflowY: 'auto',
              }}
            >
              <h4>Lista de Médicos</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {medicos.length === 0 ? (
                  <li>No hay médicos disponibles para la especialidad y el día seleccionados.</li>
                ) : (
                  medicos.map((medico, index) => (
                    <li key={index} style={{ marginBottom: '10px' }}>
                      <strong>{medico.nombre}</strong> ({medico.especialidad}) -{' '}
                      <span>Disponibilidad: {medico.disponibilidad}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
            {errorMessage && <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</p>}

            <button
              style={{
                padding: '12px 20px',
                backgroundColor: '#4c6f9b',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '1.1rem',
              }}
              onClick={handleBuscar}
            >
              Buscar Médicos
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
