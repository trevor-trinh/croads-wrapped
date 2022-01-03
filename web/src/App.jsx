import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import WrappedPage from './pages/WrappedPage';
import Layout from './components/Layout';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getLocationData } from './utils/locations';
import { commonDates, getTimeData, loadDates } from './utils/dateTime';
import { getSwipeData, getCurrentDate, getRange } from './utils/swipes';

const App = () => {
  const [loading, setLoading] = useState(true);

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
      setUsername(data['username']);

      // tries to load data from all meal plans into one array (not tested)
      let datum = Object.keys(data)
        .filter(key => key.includes('Meal Plan Activity'))
        .flatMap(item => data[item]);

      loadDates(datum);

      setMealTimes(getTimeData(commonDates));
      setLocations(getLocationData(datum));
      setSwipes(getSwipeData(commonDates));

      setLoading(false);
    }
  }, [data]);

  const HeaderFooter = ({ children }) => (
    <Layout
      username={username}
      swipesBal={swipes['thisWeek']}
      flexBal={
        data['On-Campus Meal Plan Flex Dollars Activity'][0]['New Balance']
      }
      weekStart={getRange(getCurrentDate(), 'week')['start']}
      loading={loading}
    >
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
                <HomePage username={username} />
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
                  data={data}
                  swipes={swipes}
                  locations={locations}
                  mealTimes={mealTimes}
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
