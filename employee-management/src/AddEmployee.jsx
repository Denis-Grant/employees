// import Table from "./Table";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "./config";
import { useNavigate } from "react-router-dom";
import ShowEmployeesHeader from "./ShowEmployeesHeader";

export default function AddEmployee({
  showTable,
  setShowTable,
  empData,
  setEmpData,
}) {
  const [id, setId] = useState(null);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const errors = []
  const [formErrors, setFormErrors] = useState(false)
  const [showErrors, setShowErrors] = useState(false);

  // const formField = {
  //   id: null,
  //   fn: "",
  //   ln: "",
  //   em: "",
  //   salary: "",
  //   date: "",
  // };
  function handleClick(e) {
    e.target.id == "exit" && navigate("/");
    // console.log(e.target.id);
  }

  function handleChange(e) {
    let event = e.target.className;
    // event.includes("id") && (setFirstName(e.target.value))
    event.includes("fn") && setFirstName(e.target.value);
    event.includes("ln") && setLastName(e.target.value);
    event.includes("em") && setEmail(e.target.value);
    event.includes("salary") && setSalary(e.target.value);
    event.includes("date") && setDate(e.target.value);
  }
  function isErrors() {
    errors.length = 0
    first_name.length == 0 && errors.push('First Name')
    last_name.length == 0 && errors.push('Last Name')
    email.length == 0 && errors.push('Email')
    salary.length == 0 && errors.push('Salary')
    date.length == 0 && errors.push('Date')
    
    // console.log(errors.length)
    if (errors.length > 0) {
      return true;
    } 
  }
  async function updateEmployees() {
    if (isErrors()) {
      setFormErrors(errors)
      setShowErrors(true);
    } else {
      const { data, error } = await supabase
        .from("Employees")
        .insert([{ first_name, last_name, email, salary, date }]);

      if (data) {
        console.log(data);
      }
      if (error) {
        console.log(error);
      }
      navigate("/");
    }
  }
  return (
    <div>
      <ShowEmployeesHeader />
      <form className="grid grid-cols-6 mt-1">
        {/* <input className=" gap-2 inline-block " type="text"  /> */}
        <input
          onChange={handleChange}
          className="fn border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          onChange={handleChange}
          className="ln border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          onChange={handleChange}
          className="em border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          onChange={handleChange}
          className="salary border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          onChange={handleChange}
          className="date border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input className=" gap-2 inline-block p-1" type="text" disabled />
      </form>

      <div className="mt-5 flex justify-end">
        {/* <AddEmployee showTable={showTable} /> */}
        <button
          id="submit"
          onClick={updateEmployees}
          className="bg-green-500 text-white px-4 py-2 rounded mt-5"
        >
          Submit
        </button>
        <button
          id="exit"
          onClick={handleClick}
          className="bg-red-500 text-white px-8 py-2 rounded mt-5 ml-2"
        >
          Exit
        </button>
      </div>
      {showErrors && (
        
        <div className="text-red-600 ">
          <h3 className="underline font-bold">Missing Fields</h3>
          <ul className="text-red-600 ">
            {formErrors.map((error, i) => (
              <li key={i} >{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
