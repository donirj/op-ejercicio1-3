import { Route, Routes } from 'react-router';
import ComponenteA from './components/ComponenteA/ComponenteA';
// import Home  from './components/Home';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskList from './components/container/task.list';
// import TaskListComponent from './components/container/task.list'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ComponenteA />} />
      </Routes>
      {/* <Greeting name={'doni'}></Greeting> */}
    </>
  )
}

export default App
