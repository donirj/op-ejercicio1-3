import { Route, Routes } from 'react-router';
import TaskListComponent from './container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TaskListComponent />} />
        <Route path="/Ejemplo1" element={<Ejemplo1 />} />
      </Routes>
    </>
  )
}

export default App
