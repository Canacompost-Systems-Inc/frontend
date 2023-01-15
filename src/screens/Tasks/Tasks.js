import React from 'react';
import axios from "axios";
import Card from '../../components/Card';
import Template from '../Template';
import { useThemeContext } from '../../contexts/themeContext';
import { useTaskQueueContext } from '../../contexts/taskQueueContext';
import { friendlyNameifyRoutine, unfriendlyNameifyRoutine } from "../../helpers/helpers";
import './Tasks.css';

function Tasks() {
    const taskQueContext = useTaskQueueContext();
    const {activeRoutine, taskQueue, addToQueue} = taskQueContext;

    const themeContext = useThemeContext();
    const {theme} = themeContext;

    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState(null);

    const [routines, setRoutines] = React.useState([]);

    const getRoutine = () => {
        axios.get('http://127.0.0.1:5000/routine').then(resp => {
            setRoutines(resp.data.routines);
        }).catch(error => {
            console.log("Failed to retrieve routines")
            console.log(error)
        });
    }

    React.useEffect(() => {
        getRoutine();
    }, []);

    return (
        <Template>
            <div className="tasks-header">
            <span className="tasks-header-title">
                <svg
                    style={{width:"1.5em",height:"1.5em" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    />
                </svg>
                <h1 className="screen-title">Tasks</h1>
                </span>
                <button
                    className={`toggle-view-btn toggle-view-btn-${theme}`}
                    onClick={() => {setModalVisible(true)}}
                >
                    Add Task
                </button>
            </div>
            {
                modalVisible ? (
                    <div className="tasks-add-modal-backdrop">
                        <div className={`tasks-add-modal tasks-add-modal-${theme}`}>
                            <h3>Select Task to Add</h3>
                            <ul className="tasks-add-modal-list">

                                {Array.isArray(routines) && routines.length ? routines.map(item => {
                                    return (
                                        <li>
                                            <Card>
                                                <button
                                                    onClick={() => setSelectedTask(friendlyNameifyRoutine(item.name))}
                                                    className={`task-btn task-btn-${theme}`}
                                                >
                                                    {friendlyNameifyRoutine(item.name)}
                                                </button>
                                            </Card>
                                        </li>
                                    )
                                }) : (
                                    <div className="task-no-selection">
                                        <Card>No Routine Data Available.</Card>
                                    </div>
                                )}
                            </ul>
                            <div className="task-selected-section">
                                <div>Task Selected:</div>
                                {
                                    selectedTask ? (
                                        <div className="task-selected">
                                            <Card>{selectedTask}</Card>
                                        </div>
                                    ) : (
                                        <div className="task-no-selection">
                                            <Card>No Task Selected</Card>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="tasks-modal-footer">
                                <button
                                    className={`cancel-btn cancel-btn-${theme}`}
                                    onClick={() => {
                                        setModalVisible(false);
                                        setSelectedTask(null)
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        addToQueue(unfriendlyNameifyRoutine(selectedTask));
                                        setModalVisible(false);
                                        setSelectedTask(null)
                                    }}
                                    disabled={!selectedTask}
                                >
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </div>
                    ) : null
            }
            <div className="tasks-main">
                <h2 className="tasks-sub-title">Active Task</h2>
                {
                    (activeRoutine !== null) ? (
                        <div className="tasks-queue-item-active">
                            <Card>{friendlyNameifyRoutine(activeRoutine.name)}</Card>
                        </div>
                    ) : "No Active Tasks."
                }
                <h2 className="tasks-sub-title">Queue</h2>
                <div className="tasks-main-queue">
                    {
                        Array.isArray(taskQueue) && taskQueue.length ? taskQueue.map(task => {
                            return (
                                <div className="tasks-queue-item">
                                    <Card>{friendlyNameifyRoutine(task.routine.name)}</Card>
                                </div>  
                            )
                        }) : "There are no tasks in the queue."
                    }
                </div>
            </div>
        </Template>
    )
};

Tasks.displayName = "Tasks";

export default Tasks;