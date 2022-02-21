import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnline } from 'rooks'
import Checkstatus from './Checkstatus';

function Registeruser() {

    let navigate = useNavigate()
    const isOnline = useOnline();

    const [formfields, setFormfields] = useState({
        fname: "",
        lname: "",
        email: "",
        mob: "",
        password: "",
        cnfpassword: "",
    })

    const [onFormSubmit, SetOnFormSubmit] = useState([])

    const formInputs = (e) => {
        setFormfields({ ...formfields, [e.target.name]: e.target.value })

        // console.log(formfields)

    }

    useEffect(() => {
        localStorage.setItem("password", formfields.password)
        localStorage.setItem("cnfpassword", formfields.cnfpassword)
    }, [formfields.password, formfields.cnfpassword])

    useEffect(() => {

        console.log(onFormSubmit)

    }, [onFormSubmit])



    const formsubmit = (e) => {
        e.preventDefault()
        SetOnFormSubmit([...onFormSubmit, { fname: formfields.fname, lname: formfields.lname, email: formfields.email, mob: formfields.mob, password: formfields.password, cnfpassword: formfields.cnfpassword }])
        console.log(onFormSubmit)



        console.log(localStorage.getItem("userformdata"))
        let retrivedata = JSON.parse(localStorage.getItem("userformdata"))
        if (retrivedata) {
           
            retrivedata = [...retrivedata, { fname: formfields.fname, lname: formfields.lname, email: formfields.email, mob: formfields.mob, password: formfields.password, cnfpassword: formfields.cnfpassword }]
           
            localStorage.setItem("userformdata", JSON.stringify(retrivedata))

        } else {
            localStorage.setItem("userformdata", JSON.stringify([{ fname: formfields.fname, lname: formfields.lname, email: formfields.email, mob: formfields.mob, password: formfields.password, cnfpassword: formfields.cnfpassword }]))

        }

        let checkpassword = localStorage.getItem("password")
        let withconfirmpassword = localStorage.getItem("cnfpassword")


        if (checkpassword == withconfirmpassword) {
            navigate('/')

        } else {
            alert("Password is not matched")
        }

        
    }

    useEffect(() => {
        console.log(onFormSubmit)
    }, [onFormSubmit])

    const Backbutton=()=>{
        navigate('/')
    }


    return (
        <>
        <div className='btndiv'>

        <button type="button" onClick={Backbutton} className="btn btn-info backbtn">Go Back</button>
        </div>
            {
                isOnline ?
                    <div>

                        <h1 className='Heading' >Register User</h1>
                        <div>
                            <div className='container w-50 py-1 mt-50'>
                                <form onSubmit={formsubmit}>

                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Firsname</label> <span className='requiredfield'>*</span>
                                        <input type="text" className="form-control" name="fname" onChange={formInputs} placeholder="Please Enter Your Firstname" required />
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Lastname</label> <span className='requiredfield'>*</span>
                                        <input type="text" className="form-control" name="lname" onChange={formInputs} placeholder="Please Enter Your Lastname" required />
                                    </div>

                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Email</label> <span className='requiredfield'>*</span>
                                        <input type="email" className="form-control" name="email" onChange={formInputs} placeholder="Please Enter Your Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Mobile No</label> <span className='requiredfield'>*</span>
                                        <input type="number" className="form-control" name="mob" onChange={formInputs} placeholder="Please Enter Your Mobile No" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Password</label> <span className='requiredfield'>*</span>
                                        <input type="password" className="form-control" name="password" pattern='^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@$!%*?&])[A-ZA-z\d@$!%*?&]{8,}$' title='Minimum eight character,At least one Uppercase,One Lowercase,One special character,One Numeric' onChange={formInputs} placeholder="Please Enter Your Password" required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Confirm Password</label> <span className='requiredfield'>*</span>
                                        <input type="password" className="form-control" name="cnfpassword" onChange={formInputs} pattern='^(?=.*[a-z])(?=.*[A-z])(?=.*\d)(?=.*[@$!%*?&])[A-ZA-z\d@$!%*?&]{8,}$' title='Minimum eight character,At least one Uppercase,One Lowercase,One special character,One Numeric' placeholder="Please ReEnter Your Password" required />
                                    </div>
                                    <div>

                                        <button type="submit" className="btn btn-success"  >Register</button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> : <Checkstatus />

            }
        </>

    )
}

export default Registeruser