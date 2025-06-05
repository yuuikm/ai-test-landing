import { type FC } from 'react';
import Title from 'components/shared/Title';
import Attention from 'components/UploadImage/Attention';
import { TEXTS } from 'constants/texts';

const UploadImage: FC = () => {
  return (
    <div className='container upload-image-wrapper'>
      <Title title={TEXTS.uploadImageTitle} />
      <Attention />
    </div>
  );
};

export default UploadImage;
