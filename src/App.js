import React, { useState } from 'react'

import { Header } from './_components/header'
import { GeneratorForm } from './_components/generator-form'
import { LoginModal } from './_modal/login'
import './reset.css'

const  StartPage = () => {
  const [islogin, setIsLogin] = useState(true)

  return (
    <>
      <Header />
      <GeneratorForm />
      {
        islogin &&
        <LoginModal
          isModalOpen={islogin}
          setIsModalOpen={setIsLogin} />
      }
    </>
  )
}

export default StartPage