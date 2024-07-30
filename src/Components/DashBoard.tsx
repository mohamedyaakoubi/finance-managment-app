import React, { useState } from 'react';
import '../Styles/DashBoard.css';

export const DashBoard = () => {
    
    const [balance, setBalance] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const [expenses, setExpenses] = useState<{ name: string, amount: number, type: string }[]>([]); 
    const [expense, setExpense] = useState<string>('');


    const handleBalance = (type: string) => {
        const amount = parseFloat(inputValue);
        if (!isNaN(amount) && expense) {
            if (type === 'income') {
                setBalance(balance + amount);
                setExpenses([...expenses, { name: expense, amount: amount, type: 'Income' }]);
            } else if (type === 'outcome') {
                setBalance(balance - amount);
                setExpenses([...expenses, { name: expense, amount: -amount, type: 'Outcome' }]);
            }
            setInputValue('');
            setExpense('');    
        }
    };

    const clearAllExpenses = () => {
        setExpenses([]);
        setBalance(0);
    };

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
            <div className='div1'>
                <label htmlFor="Expense">Expense:</label>
                <input 
                    type="text" 
                    id="Expense" 
                    value={expense} 
                    onChange={(e) => setExpense(e.target.value)} 
                />
            </div>
            <button onClick={() => handleBalance('income')}>Income</button>
            <button onClick={() => handleBalance('outcome')}>Outcome</button>

            

            <div id="expensetoadd">
                <ol>
                    {expenses.map((t, index) => (
                        <li key={index}>
                            {t.name}: {t.type} {t.amount} 
                        </li>
                    ))}
                </ol>
            </div>

            <button onClick={clearAllExpenses}>Clear All Expenses</button>
        </>
    );
};
