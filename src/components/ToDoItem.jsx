import React, { useState } from 'react'

const ToDoItem = ({id, text, colour, setToDoItems, toDoItems}) =>
{      
    const [bgColour, setBgColour] = useState(colour);
    const [completed, setCompleted] = useState(false);
    const [currentText, setCurrentText] = useState(text);
    const [edit, setEdit] = useState(false);

    const handleDelete = () =>
    {
        setToDoItems(toDoItems.filter(el => el.id !== id))
        setCompleted(false);
    };

    const handleEditChange = (event) =>
    {
        setCurrentText(event.target.value)
    }

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        setToDoItems(toDoItems.map(
            el => el.id === id ? {
                ...el, text: currentText
            } : el)
        )
        setEdit(false);
    }

    const EditForm = () =>
    {
        return <form className='editForm as-fe d-flex'>
                <input autoFocus type="text" value={currentText} onChange={handleEditChange} style={{ width: '100%' }} />
            
                <button type='submit' onClick={handleSubmit}>
                    <i className="fas fa-check-square"></i>
                </button>
             </form>    
    }

    const DefaultTask = () =>
    {
        return (
            <React.Fragment>
                <p style={{ width: '80%' }} onClick={() => setCompleted(!completed)}>
                    {text}
                </p>
                 <div className='as-fe d-flex' style={{ width: '20%'}}>
                    <i className="far fa-minus-square btn" onClick={handleDelete}></i>
                    <i className="far fa-edit btn" onClick={() => setEdit(!edit)} style={{fontSize: '140%'}} ></i>
                </div>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <li className={`todo-item d-flex jc-c al-c ${completed ? 'completed' : ''}`} style={{ backgroundColor: bgColour }} >
                {edit ? <EditForm /> : <DefaultTask />}
            </li>
        </React.Fragment>
    )
}

export default ToDoItem;