import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import CustomLineChart from '../components/CustomLineChart';
import ResultTable from '../components/ResultTable';
import useProject from '../hooks/useProject';

// export const data = [
//   {
//     key: 1,
//     projectName: 'first name',
//     projectDescription: 'example description',
//     clientName: 'faria',
//     contractorName: 'Rohim',
//     max_x: 23,
//     min_x: 3,
//     max_y: 4554,
//     min_y: 33,
//     max_z: 355,
//     min_z: 22,
//   },
//   {
//     key: 1,
//     projectName: 'first name',
//     projectDescription: 'example description',
//     clientName: 'faria',
//     contractorName: 'Rohim',
//     max_x: 23,
//     min_x: 3,
//     max_y: 4554,
//     min_y: 33,
//     max_z: 355,
//     min_z: 22,
//   },
// ];
function Result() {
  const navigate = useNavigate();
  const { data } = useProject();
  const tableRef = React.useRef<HTMLDivElement>(null);
  const generatePDF = useReactToPrint({
    content: () => tableRef.current,
    documentTitle: 'projectInfo',
    onAfterPrint: () => alert('Data saved in PDF format'),
  });
  return (
    <div className="w-[1000px] mx-auto space-y-8 my-5">
      <div ref={tableRef} className="dashboard-billing performance-card">
        <ResultTable data={data} />
      </div>
      <div className="flex justify-between">
        <Button
          onClick={() => navigate('/')}
          className="bg-white text-purple-700 text-[18px] opacity-75 font-bold w-[180px] h-[49px]"
        >
          Create Project
        </Button>
        <Button
          onClick={generatePDF}
          htmlType="submit"
          className="bg-purple-700 text-white text-sm text-bold  w-[135px] h-[49px] "
        >
          Download Pdf
        </Button>
      </div>
      <h2 className="text-2xl text-purple-700 font-bold">
        The result chart is look like:{' '}
      </h2>
      <div className="bg-white w-full performance-card">
        <CustomLineChart />
      </div>
    </div>
  );
}

export default Result;
