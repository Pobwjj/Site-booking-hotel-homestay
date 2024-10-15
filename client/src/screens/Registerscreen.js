import React, { useState, useEffect } from "react";

function Registerscreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCPassword] = useState('')
    function register() {
        if (password === cpassword) {
            const user = {
                name: name,
                email: email,
                password: password
            }
            console.log(user)
        }
        else {
            alert('Mật khẩu không khớp')
        }
    }
    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <div className="bs">
                        <h2>Đăng Ký</h2>
                        <input type="text" className="form-control" placeholder="Tên"
                            value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="Email"
                            value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="Mật khẩu"
                            value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="text" className="form-control" placeholder="Nhập lại mật khẩu"
                            value={cpassword} onChange={(e) => { setCPassword(e.target.value) }} />

                        <button className="btn btn-primary mt-3" onClick={register}>Đăng Ký</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registerscreen;