
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskList = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)

    // changeState = (id) => {
    //     console.log('TODO: Cambiar estado de una tarea')
    // }

    return (
        <div>
            <div>
                your task: 
            </div>          
              {/* todo: aplicar un for/map para renderizar una lista */}
              <TaskComponent task={defaultTask} >

              </TaskComponent>
        </div>
    );
};


export default TaskList;
