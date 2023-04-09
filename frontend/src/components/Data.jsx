import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/api/categorie");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container m-auto text-center mt-20 flex justify-evenly flex-wrap ">
      {data.map((item) => (
        <div key={item.id} className="mb-7">
          <div className="inline-block ">
            <div className="mb-3 text-center relative">
              <div className="max-w-md  ">
                <img
                  className="bg-transparent rounded-2xl  "
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <p className="font-semibold  text-white  capitalize border-b-4 inline-block border-yellow-300 text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
