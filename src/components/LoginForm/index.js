import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {username: '', password: '', errorText: ''}
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  navigateToHomePage = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    if (response.status === 200) {
      this.navigateToHomePage()
      this.setState({errorText: false})
    } else {
      const error = await response.json()
      this.setState({errorText: error.error_msg})
    }
  }

  render() {
    const {username, password, errorText} = this.state
    return (
      <div className="login-form-bg-container">
        <div className="login-form-header-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-header-image"
          />
        </div>
        <div className="login-form-login-image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
        </div>
        <div className="login-form-container">
          <form className="login-form" onSubmit={this.submitForm}>
            <div className="login-form-form-header-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="website-header-image"
              />
            </div>
            <label htmlFor="usernameInput" className="input-label">
              USERNAME
            </label>
            <input
              type="text"
              className="username-input"
              id="usernameInput"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label htmlFor="passwordInput" className="input-label">
              PASSWORD
            </label>
            <input
              type="password"
              id="passwordInput"
              className="password-input"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <button className="login-button" type="submit">
              Login
            </button>
            {errorText !== '' ? (
              <p className="error-text">{`*${errorText}`}</p>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
