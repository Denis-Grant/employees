import Table from "./Table";
export default function AddEmployee({showTable, setShowTable}) {
  function handleClick(e) {
    setShowTable(true);
    console.log(e.target.id);
  }
  return (
    <div>
      <form className="grid grid-cols-7 mt-1">
        <input className=" gap-2 inline-block " type="text" disabled />
        <input
          className="border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          className="border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          className="border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          className="border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input
          className="border-lime-800 border gap-2 inline-block p-1"
          type="text"
        />
        <input className=" gap-2 inline-block p-1" type="text" disabled />
      </form>

      {!showTable && (
        <div className="mt-5">
          {/* <AddEmployee showTable={showTable} /> */}
          <button
            id="submit"
            onClick={handleClick}
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
