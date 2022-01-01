import { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  const [rawData, setRawData] = useState();

  return (
    <>
      {rawData ? <Home data={rawData} /> : <Login setData={setRawData} />}
      <Footer />
    </>
  );
};

export default App;
