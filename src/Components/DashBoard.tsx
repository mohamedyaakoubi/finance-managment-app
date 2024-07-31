import '../Styles/DashBoard.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchExpenses } from '../services/api';
import { Expense } from '../interfaces/ExpensesInterface';
import { db } from '../config/firbase'; // Update this import based on your Firebase config
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';

export const DashBoard = () => {
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [balance, setBalance] = useState<number>(0);
    const [newExpenseName, setNewExpenseName] = useState<string>('');
    const [newExpenseAmount, setNewExpenseAmount] = useState<number>();
    const [newExpenseType, setNewExpenseType] = useState<'income' | 'outcome'>('outcome');
    const navigate = useNavigate();

    useEffect(() => {
        const authUserString = localStorage.getItem('auth');
        if (authUserString) {
            const authUser = JSON.parse(authUserString);
            fetchExpenses(authUser.email).then(({ expensesList, totalBalance }) => {
                setExpenses(expensesList);
                setBalance(totalBalance);
            }).catch(error => {
                console.error('Error fetching expenses:', error);
            });
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleAddExpense = async () => {
        const authUserString = localStorage.getItem('auth');
        if (authUserString) {
            const authUser = JSON.parse(authUserString);
            try {
                await addDoc(collection(db, 'expenses'), {
                    name: newExpenseName,
                    amount: newExpenseAmount,
                    type: newExpenseType,
                    userEmail: authUser.email,
                });
                // Refresh expenses list
                fetchExpenses(authUser.email).then(({ expensesList, totalBalance }) => {
                    setExpenses(expensesList);
                    setBalance(totalBalance);
                });
                // Clear input fields
                setNewExpenseName('');
                setNewExpenseAmount(0);
                setNewExpenseType('outcome');
            } catch (error) {
                console.error('Error adding expense:', error);
            }
        }
    };

    const handleDeleteExpense = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'expenses', id));
            // Refresh expenses list
            const authUserString = localStorage.getItem('auth');
            if (authUserString) {
                const authUser = JSON.parse(authUserString);
                fetchExpenses(authUser.email).then(({ expensesList, totalBalance }) => {
                    setExpenses(expensesList);
                    setBalance(totalBalance);
                });
            }
        } catch (error) {
            console.error('Error deleting expense:', error);
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem('auth');
        navigate('/login');
    };

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <p>Balance: ${balance.toFixed(2)}</p>

            <div className="add-expense-form">
                <input 
                    type="text" 
                    value={newExpenseName} 
                    onChange={(e) => setNewExpenseName(e.target.value)} 
                    placeholder="Expense Name" 
                />
                <input 
                    type="number" 
                    value={newExpenseAmount} 
                    onChange={(e) => setNewExpenseAmount(Number(e.target.value))} 
                    placeholder="Amount" 
                />
                <select value={newExpenseType} onChange={(e) => setNewExpenseType(e.target.value as 'income' | 'outcome')}>
                    <option value="income">Income</option>
                    <option value="outcome">Outcome</option>
                </select>
                <button onClick={handleAddExpense}>Add Expense</button>
            </div>

            <ul className="expense-list">
                {expenses.map(expense => (
                    <li key={expense.id}>
                        {expense.name} - ${expense.amount} ({expense.type})
                        <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
