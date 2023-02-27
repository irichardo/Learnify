import './WindowsUserEdit.css';
import stateGlobal from '../../store';
import { useRef } from 'react';

interface PropsWindowsUserEdit {
  id: string;
  img: string;
  nombre: string;
  permisos: string;
}

const permiss = ['super admin', 'admin', 'teacher', 'student'];
export default function WindowsUserEdit({
  id,
  img,
  nombre,
  permisos,
}: PropsWindowsUserEdit) {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { getDetailShowWindows, setShowWindows } = stateGlobal(
    (state) => state
  ) as {
    getDetailShowWindows: (id: string, type: string) => void;
    setShowWindows: (data: boolean) => void;
  };

  const handlePost = () => {
    getDetailShowWindows(id, String(selectRef.current?.value));
    setShowWindows(false);
  };

  const handleCancel = () => {
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
