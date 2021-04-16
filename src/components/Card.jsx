import Button from "./Button";
import WildersContext from "../context/WildersContext";
import SkillsMapping from "./SkillsMapping";
import { useContext } from "react";

function Card({ name, city, skills, id, isDeletable }) {
  const { removeWilder } = useContext(WildersContext);
  const handleDelete = async (e) => {
    e.preventDefault();
    await removeWilder(id);
  };
  return (
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
      {isDeletable && (
        <div className="mt-5">
          <Button onClick={handleDelete} text="Delete this card" />
        </div>
      )}
    </div>
  );
}
export default Card;
