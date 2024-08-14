import Table from "./Table";
import { useState } from "react";
export default function AddEmployee({ showTable, setShowTable }) {
  const formField = {
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
    event.includes("fn") && (formField.fn = e.target.value)
    event.includes("ln") && (formField.ln = e.target.value)
    event.includes("em") && (formField.em = e.target.value)
    event.includes("salary") && (formField.salary = e.target.value)
    event.includes("date") && (formField.date = e.target.value)
  }
  function updateEmployees() {

  }
  return (
    <div>
      <form className="grid grid-cols-7 mt-1">
        <input className=" gap-2 inline-block " type="text" disabled />
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
