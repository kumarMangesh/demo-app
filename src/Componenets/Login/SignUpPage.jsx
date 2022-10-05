import React from "react";
import Buttons from "../Button/Button";

import "./signup.style.css"

import FormInput from "./FormInput/formInput";

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = ({
            displayName: "",
            password: "",
            email: "",
            confirmPassword: ""
        })
    }
    handleSubmit = async event => {
    console.log("submitted")
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I dont have an account</h2>
                <span>Sign up with your email and password</span>
            <form className="sign-up-form" onClick={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange}
                    label="Display Name"
                    required
                />

                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    label="Email"
                    required
                />

                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                    label="Password"
                    required
                />

                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    label="Confirm Password"
                    required
                />
                <div className="sign-up-button">
                  <Buttons text="Sign Up"/>
                </div>

                </form>
            </div>
        )
    }
}
export default SignUp;