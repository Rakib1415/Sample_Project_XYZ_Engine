import { Form, Input } from 'antd';
import React from 'react';

const { TextArea } = Input;

interface InputProps {
  name: string;
  label: string;
  type: string;
  message: string;
  placeHolder: string;
}

const CustomInput: React.FC<InputProps> = ({
  name,
  label,
  type,
  message,
  placeHolder,
}) => {
  return (
    <Form.Item label={label} name={name} rules={[{ required: true, message }]}>
      {type === 'textarea' ? (
        <TextArea rows={5} placeholder={placeHolder} className=" mt-2" />
      ) : (
        <Input type={type} placeholder={placeHolder} />
      )}
    </Form.Item>
  );
};

export default CustomInput;
