
import React from 'react'
import { AppRouter } from './Router/AppRouter'
import { AppProvider_ } from './context_/AppProvider_'

export const TodoApp = () => {
  return (


    <AppProvider_>
      <AppRouter />
    </AppProvider_>


  )
}
