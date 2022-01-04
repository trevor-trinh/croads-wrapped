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

const App = () => {
  const [loading, setLoading] = useState(true);

  const [date, setDate] = useState(new Date());
  const [data, setData] = useState();

  const [username, setUsername] = useState();
  const [locations, setLocations] = useState();
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
    console.clear();
    console.log('%cHeyo!', 'font-size: 40px; color: green;');
    console.log(
      `%cTry typing\n>>>\tinsights\ninto the console to see all your data `,
      'font-size: 20px; color: green',
    );
    console.log('(without the >>> and click through the dropdowns)');
    console.log('Tip: try it after you choose a semester');
    console.log('\n');
    console.log(
      `%cAlso try \n>>>\tsetNavDate(new Date(<year>, <month> - 1, <day>))\nto see different swipes used that week in the nav bar`,
      'font-size: 20px; color: green',
    );
    console.log('(replacing year, month, day with numbers of your choice)');
  });

  useEffect(() => {
    if (data) {
      const { locationDatum, timeDatum, swipeDatum } = parseData(data, date);

      setUsername(data['username']);
      setMealTimes(timeDatum);
      setLocations(locationDatum);
      setSwipes(swipeDatum);

      setLoading(false);

      // for whoever's curious
      window.insights = [data, locationDatum, timeDatum, swipeDatum];
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
