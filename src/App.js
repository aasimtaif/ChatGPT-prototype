
import './App.css';
// import { arrayItems  } from './AiOptions'
import { Routes , Route} from 'react-router-dom'
import {Options,Task }from './components';
function App() {

  return (
    <>
    <Routes>
    <Route exact path='/' element={<Options/>} />
    <Route exact path='/tasks/:id' element={<Task/>} />

    </Routes>
    </>
  );

};

export default App;
