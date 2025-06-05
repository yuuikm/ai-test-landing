import { type FC, useRef, useState } from 'react';
import uploadIcon from 'assets/icons/uploadIcon.svg';
import { useDispatch } from 'react-redux';
import { setFile } from 'store/slices/uploadSlice';

type UploadFileProps = {
  title: string;
  index: number;
};

const UploadFile: FC<UploadFileProps> = ({ title, index }) => {
  const dispatch = useDispatch();
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      dispatch(setFile({ index, file }));
      const reader = new FileReader();
      reader.onloadend = () => setBackgroundImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='upload-file-wrapper'>
      <div
        className='upload-button-bg'
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='upload-button-icon-wrapper' onClick={handleIconClick}>
          <img src={uploadIcon} alt='upload' className='upload-icon' />
        </div>
        <input
          className='file-input'
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      <p className='upload-button-title'>{title}</p>
    </div>
  );
};

export default UploadFile;
