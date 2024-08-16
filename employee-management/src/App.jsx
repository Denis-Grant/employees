import supabase from "./config.js";
import AddEmployee from "./AddEmployee";
import Table from "./ShowEmployees.jsx";
import { useState, useEffect } from "react";
import ShowEmployeesHeader from "./ShowEmployeesHeader.jsx";
import ShowEmployees from "./ShowEmployees.jsx";
// import data from "./data";

export default function App() {
  console.log('IN')
  const [empData, setEmpData] = useState(null);

  const [showTable, setShowTable] = useState(true);
  const [fetchError, setFetchError] = useState(null)
//   const employees = data;
    useEffect(()=>{
        // setEmpData([])
        async function fetchEmployees() {
          const { data, error } = await supabase
            .from('Employees')
            .select()

            if (error) {
              setFetchError('Could not fetch Employees')
              console.log(error)
              setEmpData(null)
            }
            if (data) {
              // console.log(data)
              setEmpData(data)
              console.log(empData)
              setFetchError(null)
            }
        }
        fetchEmployees()

    },[])
  function handleClick() {
    setShowTable(false)
  }
  return (
    <>
      <ShowEmployeesHeader />
      {
        empData && (<ShowEmployees empData={empData} setEmpData={setEmpData} />)
      }
      {/* <div className="px-10 mt-10 container mx-auto">
        <h1 className="font-bold text-4xl">Employee Management Software</h1>
        <div className="flex mt-5 space-x-4">
          <button onClick={handleClick} className="bg-blue-800 text-white px-4 py-2 rounded">
            Add Employee
          </button>
          <button className="font-bold border-gray-300 border px-4 py-2 rounded">
            Log Out
          </button>
        </div>
        {empData &&  (<Table showTable={showTable} setShowTable={setShowTable} empData={empData} setEmpData={setEmpData}/>)}
        {
          !showTable && (
            <AddEmployee showTable={showTable} setShowTable={setShowTable} empData={empData} setEmpData={setEmpData}/>
          )
        }
      </div> */}
    </>
  );
}
