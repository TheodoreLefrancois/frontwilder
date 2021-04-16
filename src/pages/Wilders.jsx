import axios from "axios";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
function Wilders() {
  const [wilders, setWilders] = useState(null);
  const getDatas = async () => {
    const {
      data: { result },
    } = await axios.get("http://localhost:5000/api/wilder/read");
    console.log(result);
    setWilders([...result]);
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <>
      <Header titlePage="All The Wilders" />
      <div className="flex flex-col items-center mb-8">
        <div className="flex flex-wrap justify-center">
          {!wilders ? (
            <div>Loading</div>
          ) : (
            wilders.map((wilder) => {
              return (
                <Card
                  isDeletable={true}
                  id={wilder._id}
                  key={wilder._id}
                  name={wilder.name}
                  city={wilder.city}
                  skills={wilder.skills}
                />
              );
            })
          )}
        </div>
        <Link to="/addwilders">
          <Button text="Add a wilder" />
        </Link>
      </div>
    </>
  );
}

export default Wilders;
