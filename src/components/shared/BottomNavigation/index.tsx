import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Steps from 'components/shared/Steps';
import { setTaskId } from 'store/slices/uploadSlice';
import { type RootState } from '@/store';

const BottomNavigation: FC = () => {
  const files = useSelector((state: RootState) => state.upload.files);
  const dispatch = useDispatch();

  const isButtonDisabled = files.some((file) => !file);

  const handleSubmit = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      if (file) formData.append('files', file);
    });

    try {
      const res = await axios.post(
        'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/upload',
        formData
      );
      dispatch(setTaskId(res.data.task_id));
      alert(`Успешно отправлено! task_id: ${res.data.task_id}`);
    } catch (e) {
      alert('Ошибка при отправке');
      console.error(e);
    }
  };

  return (
    <div className='bottom-navigation-wrapper container'>
      <Steps />
      <button disabled={isButtonDisabled} onClick={handleSubmit}>
        Далее
      </button>
    </div>
  );
};

export default BottomNavigation;
