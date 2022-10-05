import React from "react";

import "./signinPage.style.css"

import FormInput from "./FormInput/formInput";
import Buttons from "../Button/Button";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  handelSubmit(e) {
    e.preventDefault()
    this.setState({ email: "", password: "" })
  }
  handelChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in" >
        <h2>Login</h2>
        <span>Sign in with your email and password </span>
        <div className="sign-in-page-form-container">
          <form onSubmit={this.handelSubmit}>
            <FormInput
              name="email" value={this.state.email}
              handelChange={this.handelChange} label="Email" type="email" autoComplete="off" required />

            <FormInput
              name="password" value={this.state.password} handelChange={this.handelChange} label="password" type="password" required
            />
            <div className="sign-in-page-button">
              <Buttons
              text="Sign In"
              onClick={() => {
                this.props.isUserValid(false);
                console.log("clicked")
              }}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }

}
export default SignIn;