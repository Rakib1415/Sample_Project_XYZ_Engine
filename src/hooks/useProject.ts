import { useAppSelector } from '../app/redux-hooks';

const useProject = () => {
  const { projects } = useAppSelector((state) => state.result);
  const data = projects.map((item, index) => ({
    key: index,
    projectName: item.projectInformations.projectName,
    projectDescription: item.projectInformations.projectDescription,
    clientName: item.projectInformations.clientName,
    contractorName: item.projectInformations.contractorName,
    max_x: item.projectSettings.max_x,
    min_x: item.projectSettings.min_x,
    max_y: item.projectSettings.max_y,
    min_y: item.projectSettings.min_y,
    max_z: item.projectSettings.max_z,
    min_z: item.projectSettings.min_z,
  }));
  return {
    data,
  };
};

export default useProject;
