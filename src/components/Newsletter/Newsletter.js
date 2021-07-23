import React from 'react'
import Stack from '../../composable-layout/Stack';

const Newsletter = () => {
  return (
    <div>
      <Stack gutter="0.5rem">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Subscribe to our newsletter to keep up to date on all our amazing products
        </p>
      </Stack>

      <Stack>
        <div>
          <Stack gutter="0.25rem">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </Stack>
        </div>

        <div>
          <Stack gutter="0.25rem">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </Stack>
        </div>

        <button>Subscribe</button>
      </Stack>
    </div>
  )
}

export default Newsletter
