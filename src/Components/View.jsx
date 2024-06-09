import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [student, changeStudent] = useState([])
    const fetchStudent = () => {
        axios.get("https://anishpdm.github.io/dummy-api-new/student.json").then(
            (x) => {
                changeStudent(x.data)
            }

        ).catch().finally()
    }
useEffect(()=>{
    fetchStudent()
},[])
    return (
        <div>

            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 colmd-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">First name</th>
                                    <th scope="col">Last name</th>
                                    <th scope="col">College</th>
                                    <th scope="col">D.0.B</th>
                                    <th scope="col">Course</th>
                                    <th scope="col">Mobile no</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.map(
                                    (value, index) => {
                                        return <tr>

                                            <td>{value._id}</td>
                                            <td>{value.firstname}</td>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mobile}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                        </tr>
                                    }
                                )}

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default View