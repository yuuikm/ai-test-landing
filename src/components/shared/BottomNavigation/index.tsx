import { type FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Steps from 'components/shared/Steps';
import Button from 'components/shared/Button';
import { setTaskId } from 'store/slices/uploadSlice';
import { type RootState } from '@/store';

const BottomNavigation: FC = () => {
  const files = useSelector((state: RootState) => state.upload.files);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const isButtonDisabled = loading || files.some((file) => !file);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (location.pathname === '/') {
        const formData = new FormData();
        files.forEach((file) => {
          if (file) formData.append('files', file);
        });

        const res = await axios.post(
          'https://sirius-draw-test-94500a1b4a2f.herokuapp.com/upload',
          formData
        );
        dispatch(setTaskId(res.data.task_id));
        localStorage.setItem('task_id', res.data.task_id);
        alert(`Успешно отправлено! task_id: ${res.data.task_id}`);
        navigate('/questionnaire');
      } else if (location.pathname === '/questionnaire') {
        await new Promise((r) => setTimeout(r, 1000));
        alert('Данные успешно "отправлены" (псевдо)');
        navigate('/report');
      }
    } catch (e) {
      alert('Ошибка при отправке');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bottom-navigation-wrapper container'>
      <Steps />
      <Button disabled={isButtonDisabled} onClick={handleSubmit} loading={loading}>
        Далее
      </Button>
    </div>
  );
};

export default BottomNavigation;
