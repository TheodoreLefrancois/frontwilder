import { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const initialWilderDatas = {
  name: "",
  city: "",
  skills: [],
};
const initialSkill = {
  title: "",
  votes: "",
};
function AddWilders() {
  const [wilderDatas, setWildersData] = useState({ ...initialWilderDatas });

  const [newSkill, setNewSkill] = useState({ ...initialSkill });

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
    setNewSkill({ ...initialSkill });
    console.log(wilderDatas);
  };

  const handleShowCard = (e) => {
    e.preventDefault();
    setDisplayCard(!displayCard);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { result },
      } = await axios.post("http://localhost:5000/api/wilder/create", {
        ...wilderDatas,
      });
      if (result) {
        console.log(result);
        setWildersData({ ...initialWilderDatas });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header titlePage="Add a Wilder" />
      <div className="flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col sm:flex-row w-full ml-6 items-start justify-center">
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
                className={`flex flex-col  ${
                  displaySkillForm ? "mt-4 block" : "hidden"
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

            <div
              className={`flex flex-col items-center ${
                displayCard ? "block" : "hidden"
              }`}
            >
              <Card
                isDeletable={false}
                name={wilderDatas.name}
                city={wilderDatas.city}
                skills={wilderDatas.skills}
              />
              <Button onClick={handleSubmit} text="Save" />
            </div>
          </div>
          <div className="my-6">
            <Button
              onClick={handleShowCard}
              text={displayCard ? "Hide card" : "Show Card"}
            />
          </div>
        </div>
        <Link to="/wilders">
          <Button text="See all wilders" />
        </Link>
      </div>
    </>
  );
}
export default AddWilders;
