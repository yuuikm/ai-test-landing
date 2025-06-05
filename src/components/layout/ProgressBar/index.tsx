import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '@/store';

const ProgressBar: FC = () => {
  const step = useSelector((state: RootState) => state.steps.currentStep);
  const percentage = Math.min(100, (step / 3) * 100);

  return (
    <div className='progress-bar'>
      <div className='progress-bar-fill' style={{ width: `${percentage}%` }} />
    </div>
  );
};

export default ProgressBar;
