import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SimpleSocial</h3>
                <span className="loginDesc">Connect with your friends with SimpleSocials. Powered by 501 Database.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" type="email" className="loginInput" />
                    <input placeholder="Email" type="email" className="loginInput" />
                    <input placeholder="Password" type="password" className="loginInput" />
                    <input placeholder="Password Again" type="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
