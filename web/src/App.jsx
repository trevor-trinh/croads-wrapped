import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import WrappedPage from './pages/WrappedPage';
import Layout from './components/Layout';

import { parseData } from './utils/data';

// could add some loading screens and animations
const App = () => {
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState(new Date());
  const [data, setData] = useState();

  const [username, setUsername] = useState();
  const [locations, setLocations] = useState({});
  const [mealTimes, setMealTimes] = useState({
    early: null,
    late: null,
    avg: {
      breakfast: null,
      lunch: null,
      dinner: null,
    },
  });
  const [swipes, setSwipes] = useState({
    thisWeek: null,
    avgWeek: null,
  });

  useEffect(() => {
    if (data) {
      const { locationDatum, timeDatum, swipeDatum } = parseData(data, date);

      setUsername(data['username']);
      setMealTimes(timeDatum);
      setLocations(locationDatum);
      setSwipes(swipeDatum);

      setLoading(false);
    }
  }, [data, date]);

  const HeaderFooter = ({ children }) => (
    <Layout data={data} loading={loading}>
      {children}
    </Layout>
  );

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginPage setData={setData} />} />

        <Route
          exact
          path="/"
          element={
            data ? (
              <HeaderFooter>
                <HomePage username={username} data={data} />
              </HeaderFooter>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          exact
          path="/wrapped"
          element={
            data ? (
              <HeaderFooter>
                <WrappedPage
                  swipes={swipes}
                  locations={locations}
                  mealTimes={mealTimes}
                  setDate={setDate}
                />
              </HeaderFooter>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
