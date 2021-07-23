import React from 'react'
import Stack from '../../composable-layout/Stack';

const Form = () => {
  return (
    <Stack>
      <Stack>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="firstName" />
      </Stack>
      <Stack>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="lastName" />
      </Stack>
      <Stack>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </Stack>
      <Stack>
        <label htmlFor="street-address">Street Address</label>
        <input type="text" id="streetAddress" />
      </Stack>
      <Stack>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </Stack>
      <Stack>
        <label htmlFor="state">State</label>
        <input type="text" id="state" />
      </Stack>
      <Stack>
        <label htmlFor="zip-code">Zip Code</label>
        <input type="text" id="zipcode" />
      </Stack>
    </Stack>
  )
}

export default Form;
