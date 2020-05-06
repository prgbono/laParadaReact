import React from 'react'
import { Link as ReachLink } from '@reach/router'

export const Link = props => {
  return (
    <ReachLink
      {...props}
      onClick={() => {
        window.scrollTo(0, 0)
      }}
    />
  )
}