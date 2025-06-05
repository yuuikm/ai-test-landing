import { type FC } from 'react';
import { type TextInputProps } from 'components/Questionnaire/FormControl/config';
import { Field } from 'formik';

const TextInput: FC<TextInputProps> = ({ name, placeholder, fieldType }) => (
  <Field name={name} placeholder={placeholder} type={fieldType} />
);

export default TextInput;
