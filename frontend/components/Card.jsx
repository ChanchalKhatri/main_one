"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  axios
    .get("http://localhost:8000/data")
    .then((response) => setData(response.data))
    .catch((error) => {
      console.error("Error fetching data:", error);
    });

  return (
    <div className="flex flex-wrap gap-6">
      {data.length > 0 ? (
        data.map((info) => (
          <div
            key={info.id}
            className="bg-slate-50 text-black rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-64"
          >
            <img
              src={info.path || "/assets/default.jpg"}
              alt={info.title || "Course Image"}
              className="w-full h-40 object-cover rounded-xl"
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold">{info.title || "Untitled"}</h2>
              <p className="text-sm opacity-90 mt-2">{info.desc}</p>
              <button className="mt-4 bg-white text-red-500 font-semibold py-2 px-4 rounded-lg w-full hover:bg-red-100 transition-all">
                Learn More
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
