// ~ CSS
import './TableData.css';

// * ANT DESING
import { Tag } from 'antd';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useRef, useState } from 'react';
import useAuthStore from '../../store/authStore';

type DataForTable = {
  id: string;
  img: string;
  title: string;
  cargo?: string;
  points?: number;
  userFollow?: number;
};

interface PropsTableData {
  arrayData: DataForTable[];
  action?: (title: string, id: string) => void;
}

function TableData({ arrayData, action }: PropsTableData) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { id } = useAuthStore((state) => state);
  const [sourceTable, setSourceTable] = useState<DataForTable[] | []>([]);

  const columns: ColumnsType<DataForTable> = [
    {
      title: 'img',
      key: 'img',
      render: (value: DataForTable[], record: DataForTable, index: number) => (
        <img
          src={record.img}
          alt={record.title}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            maxWidth: '50px',
            minWidth: '50px',
            maxHeight: '50px',
            minHeight: '50px',
          }}
        />
      ),
    },
    {
      title: 'Name',
      key: 'title',
      render: (value: DataForTable[], record: DataForTable, index: number) => (
        <h1>{record.title}</h1>
      ),
      sorter: {
        compare: (a, b) => (a.title < b.title ? 1 : -1),
        multiple: 1,
      },
    },
    arrayData[0].cargo?.length
      ? {
          title: 'cargo',
          key: 'cargo',
          render: (
            value: DataForTable[],
            record: DataForTable,
            index: number
          ) => {
            return record.cargo ? <h1>{record.cargo}</h1> : null;
          },
          sorter: {
            compare: (a, b) =>
              a.cargo &&
              b.cargo &&
              a.cargo.toLowerCase() < b.cargo.toLowerCase()
                ? 1
                : -1,
            multiple: 1,
          },
        }
      : {},
    arrayData[0].points
      ? {
          title: 'points',
          key: 'points',
          render: (
            value: DataForTable[],
            record: DataForTable,
            index: number
          ) => {
            return record.points ? <h1>{record.points} </h1> : null;
          },
          sorter: {
            compare: (a, b) =>
              a.points && b.points && a.points < b.points ? 1 : -1,
            multiple: 1,
          },
        }
      : {},
    arrayData[0].userFollow
      ? {
          title: 'userFollow',
          key: 'userFollow',
          render: (
            value: DataForTable[],
            record: DataForTable,
            index: number
          ) => {
            return record.userFollow ? <h1>{record.userFollow} </h1> : null;
          },
          sorter: {
            compare: (a, b) =>
              a.userFollow && b.userFollow && a.userFollow < b.userFollow
                ? 1
                : -1,
            multiple: 1,
          },
        }
      : {},
    action
      ? {
          title: arrayData[0].points ? 'Suscribe' : 'Preview',
          key: 'title',
          render: (
            value: DataForTable[],
            record: DataForTable,
            index: number
          ) => (
            <button
              onClick={() => {
                arrayData[0].points
                  ? action(record.title, id)
                  : action(record.title, record.id);
              }}
              className='unirteAction'
            >
              {arrayData[0].points ? 'Unirte' : 'Mostrar'}
            </button>
          ),
        }
      : {},
  ];

  const filterDataByTitle = (value: string): DataForTable[] =>
    arrayData.filter((data: DataForTable) =>
      data?.title?.toLowerCase().includes(value.toLowerCase())
    );

  const filterDataTable = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === 'Enter')
      setSourceTable(filterDataByTitle(String(inputRef.current?.value)));
  };

  const resetSearchData = () => setSourceTable([]);

  return (
    <section className='ContainerTableData'>
      <div className='searchBaxTableData'>
        <input
          className='inputSearch'
          onKeyDown={filterDataTable}
          ref={inputRef}
          type='text'
          placeholder='Buscar por Nombre'
        />
        <button onClick={resetSearchData} className='Reset'>
          Reset
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={sourceTable.length > 0 ? sourceTable : arrayData}
        pagination={{ pageSize: 5, position: ['bottomCenter'] }}
      />
    </section>
  );
}

export default TableData;
