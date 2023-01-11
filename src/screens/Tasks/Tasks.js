import React from 'react';
import Card from '../../components/Card';
import Template from '../Template';
import { useThemeContext } from '../../contexts/themeContext';
import { useTaskQueueContext } from '../../contexts/taskQueueContext';
import './Tasks.css';

function Tasks() {
    const taskQueContext = useTaskQueueContext();
    const {activeRoutine, taskQueue, addToQueue} = taskQueContext;

    const themeContext = useThemeContext();
    const {theme} = themeContext;

    const [modalVisible, setModalVisible] = React.useState(false);
    const [selectedTask, setSelectedTask] = React.useState(null);

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
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("CoolAndDehumidifyBioreactor1Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Cool And Dehumidify Bioreactor 1
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("CoolAndDehumidifyBioreactor2Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Cool And Dehumidify Bioreactor 2
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("CoolAndDehumidifyBSFReproductionRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Cool And Dehumidify BSF Reproduction
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("CoolAndDehumidifyShredderStorageRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Cool And Dehumidify Shredder Storage
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("CoolAndDehumidifySieveRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Cool And Dehumidify Sieve
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("FlushAirLoopRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Flush Air Loop
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("FlushCompostLoopRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Flush Compost Loop
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HeatBioreactor1Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Heat Bioreactor 1
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HeatBioreactor2Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Heat Bioreactor 2
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HeatBSFReproductionRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Heat BSF Reproduction
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HeatShredderStorageRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Heat Shredder Storage
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HumidifyBioreactor1Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Humidify Bioreactor 1
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HumidifyBioreactor2Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Humidify Bioreactor 2
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HumidifyBSFReproductionRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Humidify BSF Reproduction
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("HumidifyShredderStorageRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Humidify Shredder Storage
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromBioreactor1ToBSFReproductionRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From Bioreactor 1 To BSF Reproduction
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromBioreactor1ToShredderStorageRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From Bioreactor 1 To Shredder Storage
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromBioreactor2ToBSFReproductionRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From Bioreactor 2 To BSF Reproduction
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromBioreactor2ToShredderStorageRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From Bioreactor 2 To Shredder Storage
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromBSFReproductionToBioreactor1Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From BSF Reproduction To Bioreactor 1
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromBSFReproductionToBioreactor2Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From BSF Reproduction To Bioreactor 2
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromBSFReproductionToSieveRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From BSF Reproduction To Sieve
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromShredderStorageToBioreactor1Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From Shredder Storage To Bioreactor 1
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("MoveCompostFromShredderStorageToBioreactor2Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Move Compost From Shredder Storage To Bioreactor 2
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("ReadSensorsBioreactor1Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Read Sensors Bioreactor 1
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("ReadSensorsBioreactor2Routine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Read Sensors Bioreactor 2
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("ReadSensorsBSFReproductionRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Read Sensors BSF Reproduction
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("ReadSensorsShredderStorageRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Read Sensors Shredder Storage
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("ReadSensorsSieveRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Read Sensors Sieve
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("SanitizeAirLoopRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Sanitize Air Loop
                                        </button>
                                    </Card>
                                </li>
                                <li>
                                    <Card>
                                        <button
                                            onClick={() => setSelectedTask("SanitizeCompostLoopRoutine")}
                                            className={`task-btn task-btn-${theme}`}
                                        >
                                            Sanitize Compost Loop
                                        </button>
                                    </Card>
                                </li>
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
                                        addToQueue(selectedTask.replace(" ", ""));
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
                            <Card>{activeRoutine.name}</Card>
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