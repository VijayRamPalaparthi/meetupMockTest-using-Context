import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import HomeRoute from './components/HomeRoute'
import NotFoundRoute from './components/NotFoundRoute'
import RegisterRoute from './components/RegisterRoute'
import RegisterContext from './context/RegisterContext'
import './App.css'

class App extends Component {
  state = {isRegistered: false, topic: '', name: '', showError: false}

  onChangeRegistered = () => {
    this.setState({isRegistered: true})
  }

  onChangeName = n => {
    this.setState({name: n})
  }

  onChangeTopic = t => {
    this.setState({topic: t})
  }

  onChangeError = () => {
    this.setState({showError: true})
  }

  render() {
    const {isRegistered, topic, name, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegistered,
          topic,
          name,
          showError,

          changeRegisterStatus: this.onChangeRegistered,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          onChangeError: this.onChangeError,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Route exact path="/register" component={RegisterRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
