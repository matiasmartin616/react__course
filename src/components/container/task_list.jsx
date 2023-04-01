import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class.js'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/forms/task';

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);
    
    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <h1>
                Your Tasks:
            </h1>
            
            {/* TODO Aplicar un For/Map para generar una lista de tareas */}
            <TaskComponent task = {defaultTask}>

            </TaskComponent>
        </div>
    );
};


export default TaskListComponent;
