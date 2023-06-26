import { Route, Routes } from 'react-router';
import TaskListComponent from './container/task_list';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TaskListComponent />} />
      </Routes>
    </>
  )
}

export default App
