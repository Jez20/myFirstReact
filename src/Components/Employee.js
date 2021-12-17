import { useEffect, useState } from "react";
import EmployeeService from "../Services/EmployeeService";
import { Link } from "react-router-dom";

const Employee = () =>{

    //function hooks
    const [employees, setEmployees] = useState([])

    //hooks
    useEffect( () => {
        EmployeeService.getEmployees() //promises
        .then(
        response => {
            setEmployees(response.data);
        }    
        )
        .catch(
            err => {
                console.log("Something went wrong!")
            }
        )
    })

    return (
        <div>
            <h3>List of Employees</h3>
            <div>
            {/* <table border = "1"> */}
            {/* <Link  to="/add" className ="btn btn-primary mb-2"> Add Employee </Link> */}
            {/* table-light */}
            <table className = "table table-dark table-bordered table-hover table-stripped" >
            <thead>
                {/* table-danger / table-info */}
                <tr className = "table-dark">
                    <td>ID</td>
                    <td>Name</td>
                    <td>Department</td>
                    <td>Location</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => (
                            <tr key={employee.id}>
                                <td>{employee.employeeId}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                                <td>
                                <Link className = "btn btn-primary" to={`/employee/edit/${employee.employeeId}`}>Update</Link>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
            </div>
           
        </div>
    )
}

export default Employee;