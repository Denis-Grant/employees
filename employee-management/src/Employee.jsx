import AddEmployee from "./AddEmployee";
export default function Employee({ employee }) {
  return (
    <div className="grid grid-cols-6 my-2 pb-3 gap-x-8 items-center">
      {/* <div className=" ">{employee.id}</div> */}
      <div className="">{employee.first_name}</div>
      <div className="">{employee.last_name}</div>
      <div className="">{employee.email}</div>
      <div className="">£{employee.salary}</div>
      <div className="">{employee.date}</div>
      <div className="flex space-x-2  items-center">
        <button className="font-bold border-gray-300 border px-4 py rounded">
          Edit
        </button>
        <button className="font-bold border-gray-300 border px-4 py rounded">
          Delete
        </button>
      </div>
    </div>
  );
}
