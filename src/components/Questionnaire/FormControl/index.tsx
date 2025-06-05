import type { ElementType, FC } from 'react';
import RadioButton from 'components/Questionnaire/FormControl/RadioButton';
import TextInput from 'components/Questionnaire/FormControl/TextInput';
import { type FormControlProps } from 'components/Questionnaire/FormControl/config';

const componentMap = {
  radio: RadioButton,
  text: TextInput,
  date: TextInput,
} as const;

export const FormControl: FC<FormControlProps> = (props) => {
  const { fieldType } = props;
  const Component = componentMap[fieldType] as ElementType;

  return Component ? <Component {...props} /> : null;
};
