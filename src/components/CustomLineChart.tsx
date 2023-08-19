/* eslint-disable prettier/prettier */
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { useAppSelector } from '../app/redux-hooks';



export default function CustomLineChart() {
  const {coordinations} = useAppSelector(state => state.result);
  return (
    <div>
      <ResponsiveContainer width="98%" height={414}>
        <LineChart
          data={coordinations}
          margin={{
            top: 30,
            right: 30,
            left: 40,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="1" />
          <XAxis dataKey="KP" />
          <YAxis />
          <Tooltip />
          <Legend/>

          <Line
            type="monotone"
            dataKey="X"
            stroke="#FF0047"
            strokeWidth={1}
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Y" stroke="#2196F3" strokeWidth={1} />
          <Line type="monotone" dataKey="Z" stroke="#6900B8" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
