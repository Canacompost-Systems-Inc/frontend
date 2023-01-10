import React from "react";
import axios from "axios";

export const TaskQueueContext = React.createContext();

function TaskQueueProvider(props) {
    const [taskQueue, setTaskQueue] = React.useState([]);

    const getTaskQueue = () => {
        axios.get('http://127.0.0.1:5000/task_queue').then(resp => {
            setTaskQueue(resp.tasks);
        }).catch(error => {
            console.log("Failed to retrieve task queue")
            console.log(error)
        });
    }

    React.useEffect(() => {
        getTaskQueue();
        setInterval(() => {
            getTaskQueue();
        },3000)
    }, []);


    return <TaskQueueContext.Provider value={{taskQueue}} {...props} />;
}

function useTaskQueueContext() {
    return React.useContext(TaskQueueContext);
}

export {TaskQueueProvider, useTaskQueueContext};