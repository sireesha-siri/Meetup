import {Link} from 'react-router-dom'

import Header from '../Header'

import {
  HomeContainer,
  HomeHeading,
  HomeDescription,
  RegisterButton,
  MeetUpImage,
  HomeHeadingWithName,
  HomeDescriptionOfPerson,
} from './styledComponent'

import RegisterContext from '../../context/RegisterContext'

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

const Home = () => {
  const HomeView = () => (
    <HomeContainer>
      <HomeHeading>Welcome to Meetup</HomeHeading>
      <HomeDescription>Please register for the topic</HomeDescription>
      <Link to="/register">
        <RegisterButton type="button">Register</RegisterButton>
      </Link>
      <MeetUpImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </HomeContainer>
  )

  const HomeRegisteredView = (name, text) => (
    <HomeContainer>
      <HomeHeadingWithName>Hello {name}</HomeHeadingWithName>
      <HomeDescriptionOfPerson>Welcome to {text}</HomeDescriptionOfPerson>

      <MeetUpImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </HomeContainer>
  )

  return (
    <RegisterContext.Consumer>
      {value => {
        const {name, topic, isRegistered} = value

        const updatedTopic = topicsList.find(each => each.id === topic)

        return (
          <>
            <Header />

            {isRegistered
              ? HomeRegisteredView(name, updatedTopic.displayText)
              : HomeView()}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
