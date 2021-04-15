import axios from "axios";
import Card from "./components/Card";
import styled from "styled-components";
import { useEffect, useState } from "react";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
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
    <Container>
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
    </Container>
  );
}

export default App;
