import { type FC } from 'react';

type TitleProps = {
  title: string;
};

const Title: FC<TitleProps> = ({ title }) => {
  return <div className='title'>{title}</div>;
};

export default Title;
