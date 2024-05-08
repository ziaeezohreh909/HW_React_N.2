import Card from "../components/Card/card";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";

export default function Home() {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("http://localhost:3000/cars");
      setCarList(data);
    }
    getData();
  }, []);
  return (
    <Layout>
      <div className="flex">
        {carList.map((car) => {
          return (
            <Card
              key={car.id}
              image={car.image}
              name={car.name}
              price={car.price}
              description={car.description}
              ctaText={car.ctaText}
              action={() => alert("Are you sure?")}
            />
          );
        })}
      </div>
    </Layout>
  );
}
