import supabase from "./config.js";
import AddEmployee from "./AddEmployee";
import Table from "./ShowEmployees.jsx";
import { useState, useEffect } from "react";
import ShowEmployeesHeader from "./ShowEmployeesHeader.jsx";
import ShowEmployees from "./ShowEmployees.jsx";
// import data from "./data";

export default function App() {
  const [empData, setEmpData] = useState(null);

  const [fetchError, setFetchError] = useState(null)
    useEffect(()=>{
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
              // console.log(empData)
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
    </>
  );
}
