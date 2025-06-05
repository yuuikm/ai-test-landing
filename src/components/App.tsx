import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setStep } from 'store/slices/stepSlice';
import UploadImage from 'components/UploadImage';
import Questionnaire from 'components/Questionnaire';
import FinalReport from 'components/FinalReport';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/') {
      dispatch(setStep(1));
    } else if (location.pathname === '/questionnaire') {
      dispatch(setStep(2));
    } else if (location.pathname === '/report') {
      dispatch(setStep(3));
    }
  }, [location.pathname, dispatch]);
  return (
    <>
      <Routes>
        <Route path='/' element={<UploadImage />} />
        <Route path='/questionnaire' element={<Questionnaire />} />
        <Route path='/report' element={<FinalReport />} />
      </Routes>
    </>
  );
}

export default App;
