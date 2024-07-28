import React, { useState } from 'react';

export const DashBoard = () => {
    // State for balance and input
    const [balance, setBalance] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<string[]>([]); // Initialize tasks as an array of strings
    const [task, setTask] = useState<string>('');

    // Handler for updating balance
    const handleBalance = (type: any) => {
        const amount = parseFloat(inputValue);
        if (!isNaN(amount)) {
            if (type === 'income') {
                setBalance(balance + amount);
            } else if (type === 'outcome') {
                setBalance(balance - amount);
            }
            setInputValue(''); // Clear the input field
        }
    };
        
    
    
    const handleTask = () =>{
        if (task) {
          setTasks([...tasks, task]);
          setTask('');
        }
    };
    const deleteTask = (index :any) =>{
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); 
      }

    return (
        <>
        
            <h1>Dashboard</h1>
            <h2>Your balance:</h2>
            <h3>{balance}</h3>
            <h3>Manage your expenses</h3>
            
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={() => handleBalance('income')}>Income</button>
            <button onClick={() => handleBalance('outcome')}>Outcome</button>
            
            <div className='div1'><label htmlFor="Expense">Expense:</label>
            <input 
              type="text" 
              id="Expense" 
              value={task} 
              onChange={(e) => setTask(e.target.value)} 
            />
            </div>
            <button onClick={handleTask}>Add</button>
      <div id="tasktoadd">
        <ol>
          {tasks.map((t, index) => (
            <li key={index}>
              {t} 
              <button onClick={() => deleteTask(index)}>Done</button>
            </li>
          ))}
        </ol>
      </div>
            </>

    );
};
