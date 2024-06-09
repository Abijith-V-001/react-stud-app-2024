import React, { useState } from 'react'
import Navbar from './Navbar'

const AddStudent = () => {
    const [student,changeStudent]=useState({
        "_id":"",
        "firstname":"",
        "lastname":"",
        "college":"",
        "dob":"",
        "course":"",
        "mobile":"",
        "email":"",
        "address":""
    })
    const inputHandler=(event)=>{
        changeStudent({...student,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(student)
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Id</label>
                            <input type="text" className="form-control" name='_id' value={student._id} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">First name</label>
                            <input type="text" className="form-control" name='firstname' value={student.fi} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Last name</label>
                            <input type="text" className="form-control" name='lastname' value={student.lastname} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">College</label>
                            <input type="text" className="form-control" name='college' value={student.college} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">D.O.B</label>
                            <input type="date" name="dob" id="course" className="form-control" value={student.dob} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Course</label>
                            <input type="text" className="form-control" name='course' value={student.course} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Mobile no</label>
                            <input type="text" className="form-control" name='mobile' value={student.mobile} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" name="email" id="" className="form-control"  value={student.email} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="address" id="" className="form-control" value={student.address} onChange={inputHandler}></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <button className="btn btn-success" onClick={readValue}>Add Student</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent