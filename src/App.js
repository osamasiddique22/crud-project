import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import PatientList from './Screens/PatientList/PatientList';
import Edit from './Screens/Home/Edit';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientList" element={<PatientList />} />
        <Route path='/EditList' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
