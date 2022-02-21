import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Resetpassword() {
    const [credential, setCredential] = useState({
        email: "",
        password: "",
        newpassword: ""
    })
    let navigate = useNavigate()

    const inputChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
        console.log(credential)
    }

    useEffect(() => {
        localStorage.setItem("oldpassword", credential.password)
        localStorage.setItem("newpassword", credential.newpassword)
        localStorage.setItem("email", credential.email)

    }, [credential.email, credential.password, credential.newpassword])


    let getdata = JSON.parse(localStorage.getItem("userformdata"))
    console.log(getdata)


    const submitform = (e) => {
        e.preventDefault()

        let oldpassword = localStorage.getItem("oldpassword");

        let newpassword = localStorage.getItem("newpassword");

        let useremail = localStorage.getItem("email")

        for (let i = 0; i < getdata.length; i++) {

            if (useremail == getdata[i].email) {
                if (getdata[i].password == oldpassword) {
                    getdata[i].password = newpassword
                    localStorage.setItem("userformdata", JSON.stringify(getdata))
                    navigate('/')
                    return null
                }
                alert("please enter correct password")
            }
        }
        alert("please enter correct email")



    }

    return (
        <div>
            <h1 className='resetpassword'> Reset Password</h1>

            <div className='container w-50 p-1'>
                <form onSubmit={submitform}>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter your regsitered email address</label>
                        <input type="email" className="form-control" name="email" onChange={inputChange} placeholder="Please Enter Your Email" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter previous password</label>
                        <input type="password" className="form-control" name="password" pattern='^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@$!%*?&])[A-ZA-z\d@$!%*?&]{8,}$' title='Minimum eight character,At least one Uppercase,One Lowercase,One special character,One Numeric' onChange={inputChange} placeholder="Please Enter Your password" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Enter new passoword</label>
                        <input type="password" className="form-control" name="newpassword" pattern='^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@$!%*?&])[A-ZA-z\d@$!%*?&]{8,}$' title='Minimum eight character,At least one Uppercase,One Lowercase,One special character,One Numeric' onChange={inputChange} placeholder="Please Enter Your new password" required />
                    </div>
                    <button type="submit" class="btn btn-success">Change Password</button>
                </form>
            </div>

        </div>
    )
}

export default Resetpassword