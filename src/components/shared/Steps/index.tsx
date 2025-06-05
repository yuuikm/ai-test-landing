import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '@/store';

const Steps: FC = () => {
  const currentStep = useSelector((state: RootState) => state.steps.currentStep);

  return (
    <div className='steps'>
      <p>Шаг {currentStep}/3</p>
    </div>
  );
};

export default Steps;
