import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SimpleSocial</h3>
                <span className="loginDesc">Connect with your friends with SimpleSocials. Powered by 501 Database.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="Password" type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account!</button>
                </div>
            </div>
        </div>
    </div>
  )
}
