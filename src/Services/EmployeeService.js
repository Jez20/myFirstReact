import httpCommon from "../Commons/http-common";

const getEmployees = () =>{

    return httpCommon.get('/employee/employees');
}

const postEmployee = (data) => {
    return httpCommon.post('/employee/employees',data)
}

const getEmployee = (id) => {
    return httpCommon.get(`/employee/employees/${id}`) // note diff single quote ` not '
}

// const putEmployee = (data) => {
//     return httpCommon.post('/employee/employees',data)
// }
const putEmployee = (data) => {
    return httpCommon.put('/employee/employees',data)
}

export default {getEmployees, postEmployee, getEmployee, putEmployee};