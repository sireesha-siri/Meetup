import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
// const topicsList = [
//   {
//     id: 'ARTS_AND_CULTURE',
//     displayText: 'Arts and Culture',
//   },
//   {
//     id: 'CAREER_AND_BUSINESS',
//     displayText: 'Career and Business',
//   },
//   {
//     id: 'EDUCATION_AND_LEARNING',
//     displayText: 'Education and Learning',
//   },
//   {
//     id: 'FASHION_AND_BEAUTY',
//     displayText: 'Fashion and Learning',
//   },
//   {
//     id: 'GAMES',
//     displayText: 'Games',
//   },
// ]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'ARTS_AND_CULTURE',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  changeRegisteredStatus = () => {
    this.setState({isRegistered: true})
  }

  changeErrorStatus = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state

    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          changeRegisteredStatus: this.changeRegisteredStatus,
          changeErrorStatus: this.changeErrorStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
