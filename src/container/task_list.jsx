
import { Task } from  '../models/task.class'
import { Data } from '../models/data.class'
import { LEVELS } from '../models/levels.enum';
import TaskComponent from '../pure/task';
import ComponenteA from '../components/ComponenteA/ComponenteA';


const TaskListComponent = () => {

    const defaultTask = new Task('Mi primera tarea', 'Default description', true, LEVELS.NORMAL)

    const defaultDataA = new Data('Lucky', 'Anteuz', 'andoniresendiz@gmail.com', true)
    
    // const changeState = (id) => {
    //     console.log('TODO: cambiar el estado de una tarea')
    // }

    return (
        <div>
            <h2>
                your tasks: 
            </h2>
                {/* {map para renderizar lista} */}
                <TaskComponent task={defaultTask}></TaskComponent>
                <ComponenteA data={defaultDataA}></ComponenteA>
        </div>
    );
};


export default TaskListComponent;
