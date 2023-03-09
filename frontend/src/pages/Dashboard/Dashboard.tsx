// & ASSETS
import './Dashboard.css';
import imgPredeterminate from '../../assets/imgsPrueba/icon_perfil2.png';

// * HOOKS
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

// & TYPES
import { UserApi } from '../../helpers/Types/Cards';

// * ANT DESING
import { Tag } from 'antd';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

// ~ COMPONENTS
import WindowsUserEdit from '../../components/WindowsUserEdit/WindowsUserEdit';

// ^ STATEGLOBAL
import useAuthStore from '../../store/authStore';
import stateGlobal from '../../store';
import type { State, Actions } from '../../store';

function showWindowsSettings(
  id: string,
  img: string,
  status: boolean,
  nombre: string,
  permisos: string
) {
  const { setShowWindows, upgradePreview } = stateGlobal.getState();
  const { rol } = useAuthStore.getState();
  if (rol === 'super admin') {
    upgradePreview(id, img, status, nombre, permisos);
    setShowWindows(true);
  } else alert('no tiene permisos para modificar los usuarios');
}

function showPreview(
  id: string,
  img: string,
  status: boolean,
  nombre: string,
  permisos: string
) {
  const { upgradePreview } = stateGlobal.getState();
  upgradePreview(id, img, status, nombre, permisos);
}

const columns: ColumnsType<UserApi> = [
  {
    title: 'id',
    key: 'id',
    render: (value: UserApi[], record: UserApi, index: number) => (
      <a>{index + 1}</a>
    ),
  },
  {
    title: 'picture',
    dataIndex: 'picture',
    key: 'picture',
    render: (value: UserApi[], record: UserApi, index: number) => (
      <>
        <img
          key={index}
          className='imgTable'
          src={record.picture ? record.picture : imgPredeterminate}
        />
      </>
    ),
  },
  {
    title: 'status',
    dataIndex: 'active',
    key: 'active',
    sorter: {
      compare: (a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1),
      multiple: 1,
    },
    render: (value: UserApi[], record: UserApi, index: number) => {
      let color: string = '';
      switch (record.active) {
        case true:
          color = 'green';
          break;
        default:
          color = 'gray';
          break;
      }

      return (
        <Tag color={color} key={record.email}>
          {record.active ? 'Active' : 'Desactive'}
        </Tag>
      );
    },
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    sorter: {
      compare: (a, b) => (a.name < b.name ? 1 : -1),
      multiple: 1,
    },
  },
  {
    title: 'type',
    dataIndex: 'type',
    key: 'type',
    sorter: {
      compare: (a, b) => {
        const categorias = ['super admin', 'admin', 'teacher', 'student'];
        const categoriaA = categorias.indexOf(a.type);
        const categoriaB = categorias.indexOf(b.type);
        if (categoriaA !== categoriaB) {
          return categoriaA - categoriaB;
        }
        return 0;
      },
      multiple: 1,
    },
    render: (value: UserApi[], record: UserApi, index: number) => {
      let color: string = '';
      switch (record.type) {
        case 'student':
          color = 'purple';
          break;
        case 'teacher':
          color = 'blue';
          break;
        default:
          color = 'red';
          break;
      }

      return (
        <Tag color={color} key={record.type}>
          {record.type}
        </Tag>
      );
    },
  },
  {
    title: 'Settings',
    key: 'settings',
    render: (value: UserApi[], record: UserApi, index: number) => {
      return (
        <Space size='middle'>
          <button
            onClick={() => {
              showWindowsSettings(
                record._id,
                record.picture,
                record.active,
                record.name,
                record.type
              );
            }}
            className='Edit'
          >
            Edit
          </button>
          <button
            onClick={() => {
              showPreview(
                record._id,
                record.picture,
                record.active,
                record.name,
                record.type
              );
            }}
            className='Preview'
          >
            Preview
          </button>
        </Space>
      );
    },
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { rol } = useAuthStore((state) => state);
  if (rol === 'student' || rol === 'teacher') navigate('/');

  const inputRef = useRef<HTMLInputElement>(null);
  const [dataTable, setDataTable] = useState<UserApi[] | []>([]);
  const { allUser, preview, showWindows } = stateGlobal<State & Actions>(
    (state) => state
  );

  const filterUsers = (value: string): UserApi[] =>
    allUser.filter((user: UserApi) =>
      user?.name?.toLowerCase().includes(value.toLowerCase())
    );

  const filterDataTable = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter')
      setDataTable(filterUsers(String(inputRef.current?.value)));
  };

  const resetDataTable = () => setDataTable([]);

  return (
    <section className='containerDashboard'>
      <section className='tableDashboard'>
        <div className='optionsDashboard'>
          <input
            className='inputSearch'
            onKeyDown={filterDataTable}
            ref={inputRef}
            type='text'
            placeholder='Buscar por Nombre'
          />
          <button onClick={resetDataTable} className='Reset'>
            Reset
          </button>
        </div>
        <Table
          columns={columns}
          dataSource={dataTable.length > 0 ? dataTable : allUser}
          pagination={{ pageSize: 5, position: ['bottomCenter'] }}
        />
      </section>
      <section className='vistaPrevia'>
        <div className='window'>
          <img
            src={preview?.img?.length > 0 ? preview.img : imgPredeterminate}
            alt={preview.nombre}
          />
          <p>Nombre: {preview.nombre}</p>
          <p>Permisos: {preview.permisos}</p>
        </div>
      </section>

      {showWindows ? (
        <WindowsUserEdit
          status={preview.status}
          id={preview.id}
          img={preview.img}
          nombre={preview.nombre}
          permisos={preview.permisos}
        />
      ) : (
        ''
      )}
    </section>
  );
}
