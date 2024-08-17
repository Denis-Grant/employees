import AddEmployee from "./AddEmployee";
import supabase from "./config";
import { useNavigate } from "react-router-dom";

export default function Employee({ employee, empData, setEmpData }) {
  const navigate = useNavigate();
  // TODO:
  //   1. change function name to fetchEmployee
  // 2. determine if its editing or deleting
  // 3. goto homepage
  async function fetchEmployee(e) {
    const fn = document.getElementById("first-name").innerHTML;
    const ln = document.getElementById("last-name").innerHTML;
    const em = document.getElementById("email").innerHTML;
    const sl = document.getElementById("salary").innerHTML;
    const dt = document.getElementById("date").innerHTML;
    const EmpId = e.target.parentElement.parentElement.firstChild.innerHTML
    console.log(EmpId)
    let response = confirm(
      `Are you sure you want to ${e.target.id.toUpperCase()} ${fn} ${ln}`
    );
    if (response) {
      if (e.target.id == "edit") {
        navigate("/");
        console.log("EDITING");
      }
      if (e.target.id == "delete") {
        const { data, error } = await supabase
          .from("Employees")
          .delete()
          .eq("id", parseInt(EmpId))
          .select();

        if (error) {
          console.log(error);
        }
        if (data) {
          setEmpData((prev)=>{
            return prev.filter((emp)=> emp.id != EmpId)
          })
        }
      }
    }
  }
    return (
      <div id="id" className="grid grid-cols-6 my-2 pb-3 gap-x-8 items-center">
        <div hidden className=" ">
          {employee.id}
        </div>
        <div id="first-name" className="">
          {employee.first_name}
        </div>
        <div id="last-name" className="">
          {employee.last_name}
        </div>
        <div id="email" className="">
          {employee.email}
        </div>
        <div id="salary" className="">
          £{employee.salary}
        </div>
        <div id="date" className="">
          {employee.date}
        </div>
        <div className="flex space-x-2  items-center">
          <button
            id="edit"
            onClick={fetchEmployee}
            className="font-bold border-green-700 border px-4 py rounded"
          >
            Edit
          </button>
          <button
            id="delete"
            onClick={fetchEmployee}
            className="font-bold border-red-600 border px-4 py rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  
}
