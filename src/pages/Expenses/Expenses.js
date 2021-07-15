import React from 'react';
// import Card from '../../components/Expense/Card/Card';
import ExpenseCalendar from '../../components/Expense/ExpenseCalendar/ExpenseCalendar';
import ExpenseItem from '../../components/Expense/ExpenseItem/ExpenseItem';
import { useRecoilValue } from 'recoil';
import { itemsStateAtom } from '../../store/atoms';

const Expenses = () => {
  const expenses = useRecoilValue(itemsStateAtom);

  return (
    <div>
      <ExpenseItem data={expenses} />
      <ExpenseCalendar data={expenses} />
    </div>
  )
}

export default Expenses
