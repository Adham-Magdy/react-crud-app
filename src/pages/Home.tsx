import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Types {
  id: number;
  name: string;
  email: string;
  phone: string;
}
const Home = () => {
  const [users, setUsers] = useState<Types[]>([]);
  const loadUser = () => {
    axios.get("http://localhost:3000/users")
      .then((res) => setUsers(res.data.reverse()));
  }
  useEffect(() => {
    loadUser();
  }, []);
  const deleteUser = (id:number) => {
    axios.delete(`http://localhost:3000/users/${id}`).then(loadUser());
  }
  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">DATA TABLE</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="w-[95%] text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        No.
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {
                      users.map((data, index) => (
                         <tr key={index} className="bg-white border-b-2 border-black">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                        {index+1}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.name}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.email}
                      </td>
                      <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                        {data.phone}
                      </td>
                      <td className="flex items-center justify-center space-x-4 mt-1">
                        <button className=" bg-green-700 px-4 py-2 rounded-lg text-white font-normal">
                          Edit
                        </button>
                        <Link to={`/users/${data.id}`} className=" bg-black px-4 py-2 rounded-lg text-white font-normal">
                          View
                        </Link>
                        <button  className="  bg-red-600 px-4 py-2 rounded-lg text-white font-normal">
                          Delete
                        </button>
                      </td>
                    </tr>

                      ))
                    }
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
