import React from 'react'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterContext = React.createContext({
  name: '',
  topic: topicsList[0].id,
  isRegistered: false,
  showError: false,
  changeName: () => {},
  changeTopic: () => {},
  changeRegisteredStatus: () => {},
  changeErrorStatus: () => {},
})

export default RegisterContext
