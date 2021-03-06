import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Layout
import AppLayout from '../layout/AppLayout'

import MsgContext from '../store/context/messaging/msgContext'

// Routes
import { HOME } from '../routes'

const ThankYouPage = () => {
  const history = useHistory()

  const msgContext = useContext(MsgContext)
  const { errorMsg } = msgContext

  useEffect(() => {
    setTimeout(() => {
      history.push(HOME)
    }, 3000)
    //eslint-disable-next-line
  }, [errorMsg])

  return (
    <AppLayout bgColor="#f2f2f2">
      <div>
        <h2 className="font-neue text-center font-bold text-4xl md:text-6xl lg:text-8xl">
          {errorMsg ? errorMsg : 'Tu mensaje fue enviado con éxito'}
        </h2>
      </div>
    </AppLayout>
  )
}

export default ThankYouPage
