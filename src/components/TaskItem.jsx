// die Regularien für React-Komponenten
import { useState } from 'react'
import styles from './TaskItem.module.css'


// die Bibliothek bei den Icons: https://heroicons.com/
import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/outline';



function TaskItem({ task, deleteTask,  toggleTask, enterEditMode}) {
    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckboxChange = () =>{
        setIsChecked(!isChecked);
        toggleTask(task.id);
    }


    return (
        <>
            <li className={styles.task}>
                <div className={styles['task-group']}>
                    <input 
                        type="checkbox" 
                        checked={isChecked}
                        name={task.name}
                        id={task.id}
                        readOnly
                        className={styles.checkbox}
                        onChange={()=>{handleCheckboxChange(task)}}
                    />
                    <label 
                        htmlFor={task.id}
                        className={styles.label}
                        >
                            <CheckIcon className={styles.checkmark} strokeWidth={2} width={24} height={24}></CheckIcon>
                            {task.name}
                    </label>
                </div>
                <div className={styles["task-group"]}>
                    <button 
                        className='btn' 
                        aria-label={`Upadte ${task.name}`}
                        onClick={() => enterEditMode(task)}
                    >
                        <PencilSquareIcon width={24} height={24}></PencilSquareIcon>
                    </button>
                    <button className={`btn ${styles.delete}`} aria-label={`Delete ${task.name} Task`}
                        onClick={() => deleteTask(task.id)}>
                        <TrashIcon width={24} height={24}></TrashIcon>
                    </button>
                </div>
            </li>

        </>
    )
}

export default TaskItem