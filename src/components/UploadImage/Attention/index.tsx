import { type FC } from 'react';
import { TEXTS } from 'constants/texts';
import alertIcon from 'assets/icons/alertIcon.svg';

const Attention: FC = () => {
  return (
    <div className='attention-wrapper'>
      <div className='attention-info'>
        <img src={alertIcon} alt={alertIcon} className='attention-icon' />
        <p className='attention-description'>{TEXTS.uploadImageAttention}</p>
      </div>
    </div>
  );
};

export default Attention;
