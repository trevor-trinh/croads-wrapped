import { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
  const [rawData, setRawData] = useState();

  return (
    <>
      {rawData ? <Home data={rawData} /> : <Login setData={setRawData} />}
    </>
  );
};

export default App;
