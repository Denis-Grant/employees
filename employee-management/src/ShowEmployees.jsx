import App from "./App";
// import AddEmployee from "./AddEmployee"; 
import Employee from "./Employee";
export default function ShowEmployees({ showTable, setShowTable, empData, setEmpData}) {
// export default function ShowEmployees({ showTable, setShowTable, empData, setEmpData}) {


  return (
    <>
      { empData && empData.map((emp, i) => (
          <div key={i} className="">
            <div>
              <Employee
                employee={emp}
                empData={empData}
                setEmpData={setEmpData}
              />
            </div>
          </div>
        ))}
    </>
  );
}
