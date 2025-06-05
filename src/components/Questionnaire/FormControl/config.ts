interface Option {
  label: string;
  value: string;
}

export interface RadioButtonProps extends Option {
  fieldType: 'radio';
  name: string;
}

export interface TextInputProps {
  fieldType: 'text' | 'date';
  name: string;
  placeholder?: string;
}

export type FormControlProps = RadioButtonProps | TextInputProps;
