import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";

function AddWilders() {
  const [wilderDatas, setWildersData] = useState({
    name: "",
    city: "",
    skills: [],
  });

  const [newSkill, setNewSkill] = useState({
    title: "",
    votes: "",
  });

  const [displaySkillForm, setDisplaySkillForm] = useState(false);

  const [displayCard, setDisplayCard] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name" || e.target.name === "city") {
      setWildersData({ ...wilderDatas, [e.target.name]: e.target.value });
    } else {
      setNewSkill({
        ...newSkill,
        [e.target.name]:
          e.target.name === "title"
            ? e.target.value
            : +e.target.value
            ? e.target.value
            : "",
      });
    }
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setDisplaySkillForm(!displaySkillForm);
  };

  const handlePushSkill = (e) => {
    e.preventDefault();
    setWildersData({
      ...wilderDatas,
      skills: [...wilderDatas.skills, newSkill],
    });
    setNewSkill({
      title: "",
      votes: "",
    });
    console.log(wilderDatas);
  };

  const handleShowCard = (e) => {
    e.preventDefault();
    setDisplayCard(!displayCard);
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col sm:flex-row w-full ml-6 items-start justify-start">
        <form className="flex flex-col items-center max-w-sm w-11/12 mt-5 border-2 border-red-500 rounded-lg p-4 mr-7">
          <Input
            handleChange={handleChange}
            value={wilderDatas.name}
            name="name"
          />
          <Input
            handleChange={handleChange}
            value={wilderDatas.city}
            name="city"
          />
          <Button
            onClick={handleToggle}
            text={displaySkillForm ? "Back" : "Add a Skill"}
          />

          <div
            className={`flex flex-col mt-4 ${
              displaySkillForm ? "block" : "hidden"
            }`}
          >
            <Input
              handleChange={handleChange}
              value={newSkill.title}
              name="title"
            />
            <Input
              handleChange={handleChange}
              value={newSkill.votes}
              name="votes"
            />
            <Button onClick={handlePushSkill} text="Keep this skill" />
          </div>
        </form>

        <div className={`${displayCard ? "block" : "hidden"}`}>
          <Card
            name={wilderDatas.name}
            city={wilderDatas.city}
            skills={wilderDatas.skills}
          />
        </div>
      </div>
      <div className="mt-6 ml-6">
        <Button
          onClick={handleShowCard}
          text={displayCard ? "Hide card" : "Show Card"}
        />
      </div>
    </div>
  );
}
export default AddWilders;
