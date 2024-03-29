import React from "react";
import axios from "axios";

export const TaskQueueContext = React.createContext();

function TaskQueueProvider(props) {
    const [activeRoutine, setActiveRoutine] = React.useState(null);
    const [taskQueue, setTaskQueue] = React.useState([]);

    const getTaskQueue = () => {
        axios.get('http://127.0.0.1:5000/task_queue').then(resp => {
            setActiveRoutine(resp.data.currently_running_routine);
            setTaskQueue(resp.data.tasks);
        }).catch(error => {
            console.log("Failed to retrieve task queue")
            console.log(error)
        });
    }

    const postTaskQueue = (data) => {
        axios.post('http://127.0.0.1:5000/task_queue', data).catch(error => {
            console.log("Failed to retrieve task queue")
            console.log(error)
        });
    }

    const addToQueue = (val) => {
        const newData = {["py/object"]:"application.controller.dto.task_queue.TaskQueue", tasks:[{["py/object"]:"application.controller.dto.task.Task", routine: {["py/object"]:"application.controller.dto.routine.Routine", name: val}}]};
        postTaskQueue(newData);
    }

    React.useEffect(() => {
        getTaskQueue();
        setInterval(() => {
            getTaskQueue();
        },1000)
    }, []);


    return <TaskQueueContext.Provider value={{activeRoutine, taskQueue, addToQueue}} {...props} />;
}

function useTaskQueueContext() {
    return React.useContext(TaskQueueContext);
}

export {TaskQueueProvider, useTaskQueueContext};