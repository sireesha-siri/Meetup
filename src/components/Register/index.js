import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  RegisterSubContainer,
  RegisterImage,
  FormContainer,
  FormHeading,
  LabelAndInputContainer,
  Label,
  Input,
  Select,
  Option,
  RegisterNowButton,
  ErrorMessage,
} from './styledComponents'

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

const Register = props => (
  <RegisterContext.Consumer>
    {values => {
      const {
        name,
        topic,
        showError,
        changeName,
        changeTopic,
        changeRegisteredStatus,
        changeErrorStatus,
      } = values

      const updateName = event => {
        changeName(event.target.value)
      }

      const updateTopic = event => {
        changeTopic(event.target.value)
      }

      const submitForm = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          changeRegisteredStatus()
        } else {
          changeErrorStatus()
        }
      }

      return (
        <>
          <Header />

          <RegisterContainer>
            <RegisterSubContainer>
              <RegisterImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />

              <FormContainer onSubmit={submitForm}>
                <FormHeading>Let us join</FormHeading>

                <LabelAndInputContainer>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    onChange={updateName}
                    value={name}
                  />
                </LabelAndInputContainer>

                <LabelAndInputContainer>
                  <Label htmlFor="topics">TOPICS</Label>
                  <Select id="topics" onChange={updateTopic} value={topic}>
                    {topicsList.map(each => (
                      <Option key={each.id} value={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                </LabelAndInputContainer>

                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>

                {showError && (
                  <ErrorMessage>Please enter your name</ErrorMessage>
                )}
              </FormContainer>
            </RegisterSubContainer>
          </RegisterContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
