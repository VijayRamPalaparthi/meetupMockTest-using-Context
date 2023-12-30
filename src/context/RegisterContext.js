import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  name: '',
  topic: '',
  changeRegisterStatus: () => {},
  onChangeName: () => {},
  onChangeTopic: () => {},
})

export default RegisterContext
