import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import './index.css'

const HomeRoute = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, topic, name} = value
      return (
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="body-container">
            {isRegistered ? (
              <div>
                <p className="name">Hello {name}</p>
                <p className="welcome">Welcome to {topic}</p>
              </div>
            ) : (
              <div className="button-container">
                <h1 className="no-name"> Welcome to Meetup</h1>
                <p className="about">Please register for the topic</p>
                <Link to="/register" className="link-container">
                  <button className="register-button" type="button">
                    Register
                  </button>
                </Link>
              </div>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="meetup-image"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default HomeRoute
