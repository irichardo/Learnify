import './WindowsUserEdit.css';
import stateGlobal from '../../store';
import { useRef, useState } from 'react';
import { Switch } from 'antd';

interface PropsWindowsUserEdit {
  id: string;
  img: string;
  status: boolean;
  nombre: string;
  permisos: string;
}

const permiss = ['super admin', 'admin', 'teacher', 'student'];
export default function WindowsUserEdit({
  id,
  img,
  status,
  nombre,
  permisos,
}: PropsWindowsUserEdit) {
  const [statusList, setStatusList] = useState(status);
  const selectRef = useRef<HTMLSelectElement>(null);
  const { getDetailShowWindows, setShowWindows, putStateUserShow } =
    stateGlobal((state) => state) as {
      getDetailShowWindows: (id: string, type: string, active?: string) => void;
      setShowWindows: (data: boolean) => void;
      putStateUserShow: (id: string) => void;
    };

  const handlePost = () => {
    if (window.confirm('¿Quieres Guardar los Cambios hecho?')) {
      // Acción a realizar si el usuario hace clic en "Aceptar"
      getDetailShowWindows(
        id,
        String(selectRef.current?.value),
        String(selectRef.current?.value)
      );
      setShowWindows(false);
    } else {
      // Acción a realizar si el usuario hace clic en "Cancelar"
      setShowWindows(false);
    }
  };

  const handleState = () => {
    if (
      window.confirm(
        '¿Estás seguro de que deseas Cambiar el Status del usuario?'
      )
    ) {
      // Acción a realizar si el usuario hace clic en "Aceptar"
      putStateUserShow(id);
      setShowWindows(false);
    } else {
      // Acción a realizar si el usuario hace clic en "Cancelar"
      setShowWindows(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm('¿Quieres Salir de la ventana de edicion?'))
      setShowWindows(false);
  };

  return (
    <section className='WindowsUserEdit'>
      <section className='containerMenu'>
        <div className='infoPreview'>
          <img src={img} alt={nombre} />
          <h1>{nombre}</h1>
        </div>
        <div className='postPreview'>
          <select ref={selectRef} className='selectPermisos'>
            {permiss.map((permiso) =>
              permiso === permisos ? (
                <option key={permiso} value={permiso} disabled>
                  {permiso}
                </option>
              ) : (
                <option value={permiso}>{permiso}</option>
              )
            )}
          </select>
          <label>Activar/Desactivar cuenta:</label>
          <Switch
            defaultChecked
            checked={statusList === true ? true : false}
            onChange={(data) => {
              setStatusList(data);
              handleState();
            }}
          />
          <button className='buttonPostPermissSave' onClick={handlePost}>
            Save Change
          </button>
          <button className='buttonPostPermissCancel' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </section>
    </section>
  );
}
