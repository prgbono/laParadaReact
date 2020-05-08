import React from 'react'
import { Link } from '@reach/router'

export const Link = props => {
  return (
    <Link
      {...props}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    />
  )
}