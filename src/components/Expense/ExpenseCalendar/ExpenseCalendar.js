import React from 'react'

const ExpenseCalendar = ({ data }) => {
  return (
    <div>
      {data.map((item, date) => {
        return (
          <div>{item.date.toLocaleString()}</div>
        )
      })}
    </div>
  )
}

export default ExpenseCalendar
