import Button from "./Button";
import axios from "axios";
import SkillsMapping from "./SkillsMapping";
import { useEffect, useState } from "react";

function Card({ name, city, skills, id }) {
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {}, [isDeleted]);
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.delete(
        `http://localhost:5000/api/wilder/delete/${id}`
      );
      console.log(data);
      setIsDeleted(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isDeleted ? (
        <></>
      ) : (
        <div className=" flex flex-col items-center justify-between mx-2 my-5 p-5 rounded-xl border-4 border-red-500  w-300 ">
          <div className="divide-y">
            <img alt={name} src="/assets/imageDefault.png" />
            <p className="uppercase">{name}</p>
            <p>{city}</p>
            <div>
              {skills.map((skill) => {
                return (
                  <SkillsMapping
                    key={skill._id}
                    title={skill.title}
                    votes={skill.votes}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-5">
            <Button onClick={handleDelete} text="Delete this card" />
          </div>
        </div>
      )}
    </>
  );
}
export default Card;
