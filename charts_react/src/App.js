import logo from './logo.svg';
import './App.css';
import { PieChart, Pie, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

function App() {
  const data = [
    { name: 'Face', value: 10 },
    { name: 'Insta', value: 15 },
    { name: 'Tele', value: 20 },
  ];

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Social Media Users</h1>
        <div className="App">
          <PieChart width={400} height={400}>
            <Pie dataKey="value" isAnimationActive={false} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
            <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
            <Tooltip />
          </PieChart>

          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </div>
      </div>
    </>
  );
}

export default App;
