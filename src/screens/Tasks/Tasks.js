import React from 'react';
import Card from '../../components/Card';
import Template from '../Template';
import { useTaskQueueContext } from '../../contexts/taskQueueContext';
import './Tasks.css';

function Tasks() {
    const taskQueContext = useTaskQueueContext();
    const {taskQueue} = taskQueContext;

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
            </div>
            <div className="tasks-main">
                <h2 className="tasks-sub-title">Active Task</h2>
                {
                    Array.isArray(taskQueue) && taskQueue.length ? (
                        <div className="tasks-queue-item-active">
                            <Card>{taskQueue[0].routine.name}</Card>
                        </div>
                    ) : "No Active Tasks."
                }
                <h2 className="tasks-sub-title">Queue</h2>
                <div className="tasks-main-queue">
                    {
                        Array.isArray(taskQueue) && taskQueue.length > 1 ? taskQueue.slice(1).map(task => {
                            return (
                                <div className="tasks-queue-item">
                                    <Card>{task.routine.name}</Card>
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