import Card from "../components/Card";
import { useContext } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import WildersContext from "../context/WildersContext";
function Wilders() {
  const { wilders } = useContext(WildersContext);
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
