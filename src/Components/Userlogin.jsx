import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Checkstatus from './Checkstatus'
import { useOnline } from 'rooks'
import Resetpassword from './Resetpassword';

function Userlogin() {

    const isOnline = useOnline();


    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const inputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

        console.log(user)

    }
    useEffect(() => {
        localStorage.setItem("verifyemail", user.email)
        localStorage.setItem("verifypassword", user.password)


    }, [user.email, user.password])



    let navigate = useNavigate()


    const register = () => {
        navigate('Registeruser')

    }
    const formsubmit = (e) => {
        e.preventDefault()

        let dataFromLocalstorage = JSON.parse(localStorage.getItem("userformdata"))
        console.log(dataFromLocalstorage)


        console.log(localStorage.getItem("verifyemail"))


        for (let i = 0; i < dataFromLocalstorage.length; i++) {

            if (localStorage.getItem("verifyemail") == dataFromLocalstorage[i].email && localStorage.getItem("verifypassword") == dataFromLocalstorage[i].password) {
                navigate('/Home')
                return null

            }
        }

        alert("Incorrect credential")
        navigate('/')

    }

    const passwordreset = () => {
        navigate('/Resetpassword')

    }



    return (
        <>
            <h1 className='login'>User Login Component</h1>
            {
                isOnline ?
                    <div >
                        <div className='container w-50 py-1 mt-50'>
                            <form onSubmit={formsubmit}>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" onChange={inputChange} placeholder="Please Enter Your Email" required />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                                    <input type="password" className="form-control" pattern='^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@$!%*?&])[A-ZA-z\d@$!%*?&]{8,}$' title='Minimum eight character,At least one Uppercase,One Lowercase,One special character,One Numeric' name="password" onChange={inputChange} placeholder="Please Enter Your Password" required />
                                </div>
                                <div>

                                    <button type="submit" className="btn btn-success"  >Login</button>
                                    <button type="button" className="btn btn-link" onClick={register}>New User?</button>
                                    <button type="button" className="btn btn-link" onClick={passwordreset}>Reset Password</button>
                                </div>

                            </form>
                        </div>

                    </div> : <Checkstatus />
            }


        </>


    )
}

export default Userlogin