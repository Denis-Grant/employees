import { useNavigate } from "react-router-dom";

export default function Header({children}) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/add')
    }
  return (
    <div>
      <div className="px-10 mt-10 container mx-auto">
        <h1 className="font-bold text-4xl">Employee Management Software</h1>
        <div className="flex mt-5 space-x-4">
          <button
            onClick={handleClick}
            className="bg-blue-800 text-white px-4 py-2 rounded"
          >
            Add Employee
          </button>
          <button className="font-bold border-gray-300 border px-4 py-2 rounded">
            Log Out
          </button>
        </div>
        {children}

        {/* {empData && (
          <Table
            showTable={showTable}
            setShowTable={setShowTable}
            empData={empData}
            setEmpData={setEmpData}
          />
        )}
        {!showTable && (
          <AddEmployee
            showTable={showTable}
            setShowTable={setShowTable}
            empData={empData}
            setEmpData={setEmpData}
          />
        )} */}
      </div>
      ;
    </div>
  );
}
