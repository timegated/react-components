import React from 'react'
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpenseItem = ({ data }) => {
  return (
    <>
    {data.map((item, index) => (
      <Item key={item.id}>
        <span>{item.title}</span>
        <span>{item.amount}</span>
      </Item>
    ))}
    </>
  )
}

export default ExpenseItem
