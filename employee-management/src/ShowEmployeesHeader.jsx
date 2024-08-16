export default function ShowEmployeesHeader() {
  return (
    <div>
      <div className="grid   grid-cols-6 font-bold mt-10 gap-x-8 border-b-2 border-gray-200 pb-3">
        {/* <div className="">Id</div> */}
        <div className="">FirstName</div>
        <div className="">Last Name</div>
        <div className="">Email</div>
        <div className="">Salary</div>
        <div className="">Date</div>
        <div className="">Actions</div>
      </div>
    </div>
  );
}
