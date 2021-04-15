import axios from "axios";
import Card from "./components/Card";
import { useEffect, useState } from "react";
function App() {
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
    <div className="flex flex-wrap justify-center">
      {!wilders ? (
        <div>Loading</div>
      ) : (
        wilders.map((wilder) => {
          return (
            <Card
              key={wilder._id}
              name={wilder.name}
              city={wilder.city}
              skills={wilder.skills}
            />
          );
        })
      )}
    </div>
  );
}

export default App;
