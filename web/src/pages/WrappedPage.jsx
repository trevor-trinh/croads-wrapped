import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import WrappedHero from '../components/WrappedHero';
import WrappedDetails from '../components/WrappedDetails';

const WrappedPage = ({ data, swipes, locations, mealTimes }) => {
  const tempGradient = 'linear(to-r, red.400,pink.400)';
  const location = useLocation();
  const { date } = location.state;

  const [showDetails, setShowDetails] = useState(false);

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
        <WrappedDetails avgWeek={8} gradientTheme={tempGradient} />
      ) : (
        <WrappedHero
          gradientTheme={tempGradient}
          semesterSwipes={103}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
};

export default WrappedPage;
