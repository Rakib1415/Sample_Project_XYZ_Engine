import { Checkbox } from 'antd';
import { useState } from 'react';
import ProjectForm from '../components/project/ProjectForm';
import ProjectSettingForm from '../components/project/ProjectSettingForm';

function Home() {
  const [current, setCurrent] = useState<number>(0);
  const renderComponent = (currentComponentNumber: number) => {
    switch (currentComponentNumber) {
      case 0:
        return (
          <ProjectForm
            setCurrent={setCurrent}
            current={currentComponentNumber}
            disabled={false}
          />
        );
      case 1:
        return (
          <ProjectSettingForm
            current={currentComponentNumber}
            setCurrent={setCurrent}
          />
        );
      default:
        return (
          <ProjectForm
            setCurrent={setCurrent}
            current={currentComponentNumber}
            disabled={false}
          />
        );
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className="w-[500px] flex flex-col items-center">
          <div className="flex items-center flex-row w-48">
            <Checkbox
              checked={current === 1}
              className="flex "
              value="stripe"
              name="Stripe"
            />
            <div className="bg-[#999999] w-72 h-[2px]" />
            <Checkbox
              checked={current === 2}
              className="flex "
              value="stripe"
              name="Stripe"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-[300px]">
            <div className="text-2sm mt-1 text-purple-700">Create Project</div>
            <div className="text-2sm mt-1 text-purple-700">Project Setting</div>
          </div>
        </div>
      </div>

      {renderComponent(current)}
    </div>
  );
}

export default Home;
