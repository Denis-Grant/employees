import data from "./data";
import App from "./App";
import { useState } from "react";
import AddEmployee from "./AddEmployee";
import Employee
 from "./Employee";
export default function Table({ showTable, setShowTable }) {
  // const [isDisabled, setIsDisabled] = useState(false)
//   const [showForm, setShowForm] = useState(false)
  const employees = data;

  return (
    <>
      <div className="grid grid-cols-7 font-bold mt-10 gap-x-8 border-b-2 border-gray-200 pb-3">
        <div className="">Id</div>
        <div className="">FirstName</div>
        <div className="">Last Name</div>
        <div className="">Email</div>
        <div className="">Salary</div>
        <div className="">Date</div>
        <div className="">Actions</div>
      </div>
      {showTable &&
        employees.map((emp, i) => (
          <div key={i} className="">
            <div >
              <Employee employee={emp}/>
            </div>
          </div>
        ))}
        
      
    </>
  );
}
