/* eslint-disable import/no-cycle */
import { Button, Form } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/redux-hooks';
import { createProjectInfo } from '../../features/project/projectSlice';
import CustomInput from '../CustomInput';

export interface ProjectInfo {
  projectName: string;
  projectDescription: string;
  clientName: string;
  contractorName: string;
}

export default function ProjectForm({
  setCurrent,
  current,
  disabled,
}: {
  setCurrent: (current: number) => void;
  current: number;
  disabled: boolean;
}) {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const { projectInformations } = useAppSelector((state) => state.project);
  const onFinish = (values: ProjectInfo) => {
    console.log('Success:', values);
    dispatch(createProjectInfo(values));
    setCurrent(current + 1);
  };
  if (disabled) {
    form.setFieldsValue(projectInformations);
  }

  return (
    <Form
      form={form}
      disabled={disabled}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className="w-[1000px] mx-auto space-y-8 my-5"
    >
      <div className="bg-white w-full px-5 py-7  billing-box-border ">
        <CustomInput
          name="projectName"
          label="Project Name"
          message="Please input your project name!"
          type="text"
          placeHolder="Enter project name"
        />

        <CustomInput
          name="projectDescription"
          label="Project Description"
          message="Please describe your project!"
          type="textarea"
          placeHolder="Insert your project description"
        />

        <CustomInput
          name="clientName"
          label="Client Name"
          message="Please input your client name!"
          type="text"
          placeHolder="Enter client name"
        />

        <CustomInput
          name="contractorName"
          label="Contractor Name"
          message="Please input your contractor name!"
          type="text"
          placeHolder="Enter contractor name"
        />
      </div>

      {!disabled && (
        <Form.Item className="flex justify-end">
          <Button
            htmlType="submit"
            className="bg-purple-700 text-white text-sm text-bold  w-[135px] h-[49px] "
          >
            Next
          </Button>
        </Form.Item>
      )}
    </Form>
  );
}
