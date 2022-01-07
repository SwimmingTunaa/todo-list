import React, {useEffect, useState} from 'react'
import ToDoItem from './ToDoItem';


const ToDoList = () =>
{
    const [toDoValue, setToDoValue] = useState('');
    const [toDoItems, setToDoItems] = useState([]);
    const [counter, setCounter] = useState(-1);

    const colours = ["#998675", "#736357", "#534741", "#362f2d"]

    useEffect(() =>
    {
    },[toDoItems])

    const handleValueChange = (event) =>
    {
        event.preventDefault();
        setToDoValue(event.target.value)
    }

    const handleSubmit = (event, index) =>
    {
        event.preventDefault();
        if(toDoValue !=='')
        {
            setToDoItems([...toDoItems, { id: [Math.random() * 100], text: toDoValue }]);
            setToDoValue('');

            setCounter(counter + 1)
            if(counter >= 3)
                setCounter(0)
        }
    }

 

    const renderToDoItems = () =>
    {
        const items = toDoItems.map((item, index) =>
        {
            return <ToDoItem key={index} text={item.text} colour={colours[counter]} id={item.id} setToDoItems={setToDoItems} toDoItems={toDoItems}/>
        })
        return (
            <ul>
                {items}
            </ul>
        )
    }

    return (
        <div className='main d-flex fd-c al-c'>
            <h1 className='title'>What's the Plan Today?</h1>
            <div className='todo-container d-flex fd-c al-c' >
                <form className='textInput'>
                    <input
                        autoFocus 
                        value={toDoValue}
                        type="text"
                        onChange={handleValueChange}
                        placeholder='What to do?'
                        id='todoInput'
                        className='formInput'
                    />

                    <button
                        onClick={handleSubmit}
                        type='submit'
                    >
                        Add
                    </button>
                </form>
                 {renderToDoItems()}
            </div>
        </div>
    )
}

export default ToDoList;