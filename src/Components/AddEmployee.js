import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import EmployeeService from "../Services/EmployeeService"

const AddEmployee = () =>
{
    const [name,setName] = useState("")
    const [location,setLocation] = useState("")
    const [department,setDepartment] = useState("")
    const navigate = useNavigate();
    const {employeeId} = useParams();

    const saveEmployee = (e) => 
    {
        e.preventDefault() // to prevent refresh

        const employee = {name, location, department, employeeId}

        if (employeeId)
        {
                        //update employee
            EmployeeService.putEmployee(employee) //promise
            .then(response => {
                console.log("Employee updated!", response.data)
                navigate("/employee")
            })
            .catch(error => {
                console.log("Something went wrong!")
            })
        }
        else
            //add employee
            EmployeeService.postEmployee(employee) //promise
            .then(response =>
            {
            console.log("Employee added!", response.data)
            navigate("/employee")
            })
             .catch(error => {
            console.log("Something went wrong!")
             })



    }

    //hooks
    useEffect( () => 
    {
         if(employeeId){
             EmployeeService.getEmployee(employeeId)
             .then(response =>{
                 setName(response.data.name);
                 setLocation(response.data.location);
                 setDepartment(response.data.department);
             })
             .catch(error =>{
                 console.log("Something went wrong!")
             })
         }

    },[]) // add empty array for you to enter to the fields

    return(
        <div>
            <h1>Add Employee</h1>
            <form>
  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input 
    type="text" 
    className="form-control" 
    id="name" 
    placeholder = "Input Employee Name" 
    value = {name}
    onChange ={
        (e) => setName(e.target.value)
    }/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Location</label>
    <input 
    type="text" 
    className="form-control" 
    id="location" 
    placeholder = "Input Employee Location" 
    value = {location}
    onChange ={
        (e) => setLocation(e.target.value)
    }/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Department</label>
    <input 
    type="text" 
    className="form-control" 
    id="department" 
    placeholder = "Input Employee Department" 
    value = {department}
    onChange ={
        (e) => setDepartment(e.target.value)
    }/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
</form>
        </div>
    )
}

export default AddEmployee;