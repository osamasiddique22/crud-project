import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/Home';
import PatientList from './Screens/PatientList/PatientList';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PatientList" element={<PatientList />} />
      </Routes>
    </div>
  );
}

export default App;
