import React, { useState, useEffect } from "react";

function Loginscreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function login() {
        const user = {
            email: email,
            password: password
        }
        console.log(user)
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <div className="bs">
                        <h2>Đăng Nhập</h2>
                        <input type="text" className="form-control" placeholder="Email"
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="Mật khẩu"
                            value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button className="btn btn-primary mt-3" onClick={login}>Đăng Nhập</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Loginscreen;