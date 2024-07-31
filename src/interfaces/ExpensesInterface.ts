export interface Expense {
    name: string;
    balance: number;
    amount: number;
    type: 'income' | 'outcome';
    userEmail: string;
    id: string; // Ensure this is not optional
}
