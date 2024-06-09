import React from 'react'
import Navbar from './Navbar'

const View = () => {
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
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default View