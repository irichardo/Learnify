import './Dashboard.css';

import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import imgPredeterminate from '../../assets/imgsPrueba/icon_perfil2.png';

import stateGlobal from '../../store';
import { Mentor } from '../../helpers/Types/Cards';

import axios from 'axios';

function showWindowsSettings(nombre: string) {
  alert('editando: ' + nombre);
}

const columns: ColumnsType<Mentor> = [
  {
    title: 'id',
    key: 'id',
    render: (value: Mentor[], record: Mentor, index: number) => <a>{index+1}</a>,
  },
  {
    title: 'imagen',
    dataIndex: 'img',
    key: 'img',
    render: (value: Mentor[], record: Mentor, index: number) => (
      <>
        <img
          key={index}
          className='imgTable'
          src={record.img ? record.img : imgPredeterminate}
        />
      </>
    ),
  },
  {
    title: 'nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'expert',
    dataIndex: 'expert',
    key: 'expert',
    render: (value: Mentor[], record: Mentor, index: number) => {
      return (
        <>
          {record.expert.map((data) => (
            <Tag color='green' key={data.nombre}>
              {data.nombre.toUpperCase()}
            </Tag>
          ))}
        </>
      );
    },
  },
  {
    title: 'Settings',
    key: 'settings',
    render: (value: Mentor[], record: Mentor, index: number) => {
      return (
        <Space size='middle'>
          <button
            onClick={() => {
              showWindowsSettings(record.nombre);
            }}
            className='Edit'
          >
            Edit
          </button>
        </Space>
      );
    },
  },
];

export default function Dashboard() {
  const ArrayMentors: Mentor[] = stateGlobal((state) => state.ArrayMentors);

  return (
    <section className='containerDashboard'>
      <section className='table'>
        <Table columns={columns} dataSource={ArrayMentors} />
      </section>
    </section>
  );
}
