import React from 'react'
import Stack from '../../composable-layout/Stack';

const Newsletter = () => {
  return (
    <Stack gutter="xl">
      <Stack gutter="sm">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing products
        </p>
      </Stack>

      <Stack>
          <Stack gutter="0.25rem">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </Stack>

          <Stack gutter="0.25rem">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </Stack>


        <button>Subscribe</button>
      </Stack>
    </Stack>
  )
}

export default Newsletter
