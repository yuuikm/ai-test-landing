import { type FC } from 'react';
import { type RadioButtonProps } from 'components/Questionnaire/FormControl/config';
import { Field } from 'formik';

const RadioButton: FC<RadioButtonProps> = ({ label, value, name }) => (
  <label key={value} htmlFor={`status-${value}`}>
    <Field id={`status-${value}`} name={name} type='radio' value={value} />
    {label}
  </label>
);

export default RadioButton;
