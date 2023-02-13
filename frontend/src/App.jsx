import { useState } from 'react';
import Home from './pages/Home/Home';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div className='App-header'>
        <Home />
      </div>
    </div>
  );
}

export default App;
