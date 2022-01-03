import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import WrappedHero from '../components/WrappedHero';
import WrappedDetails from '../components/WrappedDetails';

const WrappedPage = ({ swipes, locations, mealTimes, setDate }) => {
  const tempGradient = 'linear(to-r, red.400,pink.400)';
  const location = useLocation();
  const { date } = location.state;

  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setDate(date);
  }, [date, setDate]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: showDetails ? 'auto' : 'smooth',
    });
  }, [showDetails]);

  return (
    <>
      {showDetails ? (
        <WrappedDetails
          gradientTheme={tempGradient}
          avgWeek={swipes.avgWeek}
          locations={locations}
          timeEarly={mealTimes.early}
          timeLate={mealTimes.late}
          timeBreakfast={mealTimes.avg.breakfast}
          timeLunch={mealTimes.avg.lunch}
          timeDinner={mealTimes.avg.dinner}
        />
      ) : (
        <WrappedHero
          gradientTheme={tempGradient}
          semesterSwipes={swipes.total}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
};

export default WrappedPage;
