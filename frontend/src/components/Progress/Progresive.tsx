import './Progresive.css';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

function Progresive() {
  return (
    <section className='containerProgresive'>
      <Spin indicator={antIcon} />
    </section>
  );
}

export default Progresive;
