import SkillsMapping from "./SkillsMapping";

function Card({ name, city, skills }) {
  return (
    <div className="mx-2 my-5 p-5 rounded-xl border-4 border-red-500 divide-y w-300 ">
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
  );
}
export default Card;
