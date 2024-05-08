import axios from "axios";
import { useEffect, useState } from "react";

export default function Card() {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("http://localhost:3000/cars");
      setCarList(data);
    }
    getData();
  }, []);
  return (
    <div className="flex">
      {carList.map(
        (car: {
          id: number;
          name: string;
          price: string;
          description: string;
          image: string;
        }) => {
          return (
            <div className="border w-1/4 m-2 p-2 flex flex-col justify-between gap-1 rounded-sm">
              <img src={car.image} alt="" />
              <h2 className="font-bold">{car.name}</h2>
              <h3 className="text-sm font-semibold">{car.price}</h3>
              <p className="text-gray-600 font-sans text-xs">
                {car.description}
              </p>
              <button className="bg-blue-500 text-white font-bold text-xs py-1 rounded-md">
                Buy Now
              </button>
            </div>
          );
        }
      )}
    </div>
  );
}
