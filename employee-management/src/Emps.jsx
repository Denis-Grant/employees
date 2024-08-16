import { useNavigate } from "react-router-dom";
export default function Emps() {
    const navigate = useNavigate()

    function handleClick()  {
        navigate('/')
    }
  return (
    <div className="container mx-auto px-4">
      <button onClick={handleClick} className="px-4 py-2 bg mt-10 bg-green-600 text-white font-bold">
        Home
      </button>
    </div>
  );
}
