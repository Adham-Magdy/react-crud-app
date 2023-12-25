import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface userData {
  name: string;
  email: string;
  phone: string;
}

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState<userData[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setUser(res.data));
  }, []);
  console.log(user);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      {user && (
        <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
          <div className="w-5/12 flex flex-col space-y-4">
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Name
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Email
              </h2>
              <h2 className="text-white font-bold text-3xl border-black border-b-2">
                Phone
              </h2>
          </div>
          <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.name}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.email}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
                {user.phone}
              </h2>
            </div>
        </div>
      )}
    </div>
  );
};

export default User;
