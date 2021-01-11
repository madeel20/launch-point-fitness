import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <div className="d-flex flex-column welcome-container">
            <p className="welcome-text">Welcome to LaunchPoint Fitness. Please select from below</p>
            <div className="d-flex w-100 justify-content-between">
                <Link to="sign-up" className="bordered-container">I am a new Fitness Professional <br /> and I would like to start my <br />partnership with LaunchPoint Fitness</Link>
                <Link to="/login" className="bordered-container">I am a LaunchPoint Partner <br /> and I would like <br /> to log-in</Link>
                <Link to="/end-user" className="bordered-container">I am an end user <br />looking for fitness classes</Link>
            </div>
        </div>
    )
}
export function EndUser() {
    return (
        <div className="d-flex flex-column welcome-container  align-items-center">
            <p className=""><b>Link Page for End Users </b></p>
            <div className="d-flex w-100 justify-content-between">
                <span className="d-flex flex-column  align-items-center">
                    <p>IOS Users</p>
                    <Link className="bordered-container" >Please visit the AppStore and Download <br /> the LaunchPoint Fitness App.</Link>
                </span>
                <span className="d-flex flex-column  align-items-center">
                    <p>Android Users</p>
                    <Link className="bordered-container">Please visit Google Play and Download <br /> the LaunchPoint Fitness App.</Link>
                </span></div>
        </div>
    )
}
export function Login() {
    return (
        <div className="d-flex flex-column welcome-container  align-items-center">
            <p className="mb-4"><b>Log-In Page for Returning Fitness Professionals.</b></p>
            <div className="mt-4 d-flex w-100 justify-content-center">
                <Link to="login" style={{width:'30%'}} className="bordered-container" >Log-In</Link>
            </div>
        </div>
    )
}

export default Welcome

