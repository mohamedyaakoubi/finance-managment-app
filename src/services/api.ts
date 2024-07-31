import { db } from '../config/firbase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Expense } from '../interfaces/ExpensesInterface';

export const fetchExpenses = async (userEmail: string) => {
    try {
        const q = query(collection(db, 'expenses'), where('userEmail', '==', userEmail));
        const querySnapshot = await getDocs(q);
        const expensesList: Expense[] = querySnapshot.docs.map(doc => ({
            ...doc.data() as Expense,
            id: doc.id
        }));

        // Calculate total balance by adding income and subtracting outcome
        const totalBalance = expensesList.reduce((acc, expense) => {
            return expense.type === 'income' ? acc + expense.amount : acc - expense.amount;
        }, 0);

        return { expensesList, totalBalance };
    } catch (error) {
        console.error('Error fetching expenses:', error);
        throw error;
    }
};
