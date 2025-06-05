import { type FC } from 'react';
import { TEXTS } from 'constants/texts';

const Attention: FC = () => {
  return (
    <div className='attention-wrapper'>
      <p className='attention-description'>{TEXTS.uploadImageAttention}</p>
    </div>
  );
};

export default Attention;
