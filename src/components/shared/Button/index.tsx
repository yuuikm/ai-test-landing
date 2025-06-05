import { type FC } from 'react';

interface ButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ disabled, onClick, loading, children }) => {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={`button-default${disabled ? ' button-disabled' : ''}${loading ? ' button-loading' : ''}`}
    >
      {loading ? 'Отправка...' : children}
    </button>
  );
};

export default Button;
