// import Table from "./Table";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "./config";
import { useNavigate } from 'react-router-dom'
export default function AddEmployee({
  showTable,
  setShowTable,
  empData,
  setEmpData,
}) {
  const [id, setId] = useState(null);
  const [first_name, setFirstName] = useState(null);
  const [last_name, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [salary, setSalary] = useState(null);
  const [date, setDate] = useState(null);
  const navigate = useNavigate()

  const formField = {
    id: null,
    fn: "",
    ln: "",
    em: "",
    salary: "",
    date: "",
  };
  function handleClick(e) {
    setShowTable(true);
    console.log(e.target.id);
  }

  function handleChange(e) {
    let event = e.target.className;
    // event.includes("id") && (setFirstName(e.target.value))
    event.includes("fn") && (setFirstName(e.target.value))
    event.includes("ln") && (setLastName(e.target.value))
    event.includes("em") && (setEmail(e.target.value))
    event.includes("salary") && (setSalary(e.target.value))
    event.includes("date") && (setDate(e.target.value))
  }
  async function updateEmployees() {
    const {data, error} = await supabase
    .from('Employees')
    .insert([{first_name, last_name, email, salary, date}])
    // .insert([{first_name, last_name, email,salary, date}])
    // setEmpData((prev) => [
    //   ...prev,
    //   {
    //     id: uuidv4(),
    //     fn: formField.fn,
    //     ln: formField.ln,
    //     em: formField.em,
    //     salary: formField.salary,
    //     date: formField.date,
    //   },
    // ]);
    if (data) {
      console.log(data)
    }
    if (error) {
      console.log(error)
    }
    setShowTable(true);
  }
  return (
    <div>
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

      {!showTable && (
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
      )}
    </div>
  );
}
