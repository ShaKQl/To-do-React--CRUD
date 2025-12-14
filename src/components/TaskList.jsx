import TaskItem from "./TaskItem"
import styles from './TaskList.module.css'

function TaskList({tasks, deleteTask, toggleTask, enterEditMode}) {

    return(
        <>
            <ul className={styles.tasks}>
                {
                    tasks.sort((a, b) => b.id - a.id).map((task)=>(
                        <TaskItem enterEditMode={enterEditMode} toggleTask={toggleTask} deleteTask={deleteTask} key={task.id} task={task}/>)
                    )
                }
            </ul>
        </>
    )
}

export default TaskList