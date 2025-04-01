import React from 'react';
import './App.css';
import FileInput from './components/FileInput';
import ExcelExport from './components/ExcelExport';

const data = [
  { id: 1, name: 'John Doe', age: 30, profession: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 25, profession: 'Designer' }
]

function App() {
  return (<>
    <div className="App">
      <h1>Import Excel Data in React.js</h1>
      <FileInput />
    </div>

    <div style={{textAlign: 'center', marginTop: '10px'}}>
      <h1 >Export Data to Excel</h1>
      <ExcelExport data={data} fileName="employees" />
    </div>
    </>);
}

export default App;