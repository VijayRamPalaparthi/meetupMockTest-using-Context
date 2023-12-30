import RegisterContext from '../../context/RegisterContext'
import './index.css'

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

const RegisterRouter = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        topic,
        name,
        showError,
        onChangeError,
        onChangeName,
        onChangeTopic,
        changeRegisterStatus,
      } = value

      const onSubmitForm = event => {
        event.preventDefault()
        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          changeRegisterStatus()
        } else {
          onChangeError()
        }
      }

      const onChangeOption = event => {
        const id = event.target.value
        const obj = topicsList.filter(each => each.id === id)
        onChangeTopic(obj[0].displayText)
      }

      const onChangeOfName = event => {
        onChangeName(event.target.value)
      }

      return (
        <div className="register-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="register-body-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
              className="register"
            />
            <form className="form-container" onSubmit={onSubmitForm}>
              <h1 className="heading"> Let us Join</h1>
              <div className="input-container">
                <label className="label" htmlFor="name">
                  NAME
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  className="input"
                  placeholder="Your name"
                  onChange={onChangeOfName}
                />
              </div>

              <div className="input-container">
                <label className="label" htmlFor="topic">
                  TOPICS
                </label>
                <select id="topic" className="select" onChange={onChangeOption}>
                  {topicsList.map(each => (
                    <option key={each.id} value={each.id} className="option">
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <button className="register-button" type="submit">
                Register Now
              </button>
              {showError && <p className="error"> Please enter your name</p>}
            </form>
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterRouter
