import React from "react";

import "./login.css"

import SigninPage from "./SigninPage";
import SignUpPage from "./SignUpPage";

const SignInSignUpPage=({isUserValid})=>{
    return(
        <div className="sign-in-and-sign-up">
            <SigninPage isUserValid={isUserValid}/>
            <SignUpPage/>
        </div>
    )
}
export default SignInSignUpPage;