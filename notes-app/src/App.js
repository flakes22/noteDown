import './App.css';
import { Home } from './pages/Home';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
