import { type FC } from 'react';
import Title from 'components/shared/Title';
import Attention from 'components/UploadImage/Attention';
import UploadFile from 'components/UploadImage/UploadFile';
import { TEXTS } from 'constants/texts';
import { UPLOAD_FILE_ITEMS } from 'components/UploadImage/config';

const UploadImage: FC = () => {
  return (
    <div className='container upload-image-wrapper'>
      <Title title={TEXTS.uploadImageTitle} />
      <Attention />
      <div className='upload-image-icons'>
        {UPLOAD_FILE_ITEMS.map(({ id, title }, index) => (
          <UploadFile key={id} title={title} index={index} />
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
