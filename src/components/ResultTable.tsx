import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  projectName: string;
  projectDescription: string;
  clientName: string;
  contractorName: number;
  max_x: number;
  min_x: number;
  max_y: number;
  min_y: number;
  max_z: number;
  min_z: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Project Name',
    dataIndex: 'projectName',
  },
  {
    title: 'Project Description',
    dataIndex: 'projectDescription',
  },
  {
    title: 'Client Name',
    dataIndex: 'clientName',
  },
  {
    title: 'Contractor Name',
    dataIndex: 'contractorName',
  },
  {
    title: 'Max_X',
    dataIndex: 'max_x',
  },
  {
    title: 'Min_X',
    dataIndex: 'min_x',
  },
  {
    title: 'Max_Y',
    dataIndex: 'max_y',
  },
  {
    title: 'Min_Y',
    dataIndex: 'min_y',
  },
  {
    title: 'Max_Z',
    dataIndex: 'max_z',
  },
  {
    title: 'Min_Z',
    dataIndex: 'min_z',
  },
];

export default function ResultTable({ data }: { data: any[] }) {
  return (
    <Table
      className="bordered-table"
      columns={columns}
      dataSource={data}
      // scroll={{ x: 1700 }}
      pagination={false}
    />
  );
}
