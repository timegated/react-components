import React from 'react';
import Card from '../../components/Expense/Card/Card';
import ExpenseCalendar from '../../components/Expense/ExpenseCalendar/ExpenseCalendar';
import ExpenseItem from '../../components/Expense/ExpenseItem/ExpenseItem';

const Expenses = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Tissues',
      amount: 64.21,
      date: new Date(2019, 7, 12),
    },
    {
      id: 'e2',
      title: 'Paper',
      amount: 50.20,
      date: new Date(2019, 7, 12),
    },
    {
      id: 'e3',
      title: 'Orange',
      amount: 12.64,
      date: new Date(2019, 7, 12),
    }
  ];

  return (
    <div>
      <ExpenseItem data={expenses} />
      <ExpenseCalendar data={expenses}/>
    </div>
  )
}

export default Expenses
