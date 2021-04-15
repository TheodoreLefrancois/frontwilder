import SkillsMapping from "./SkillsMapping";
import styled from "styled-components";

const CardContainer = styled.div`
  --tw-border-opacity: 1;
  border-color: rgba(239, 68, 68, var(--tw-border-opacity));
  --tw-divide-y-reverse: 0;
  border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(2px * var(--tw-divide-y-reverse));
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding: 1.25rem;
  border-radius: 0.75rem;
  border-width: 4px;
  width: 300px;
`;
function Card({ name, city, skills }) {
  return (
    <CardContainer>
      <img alt={name} src="/assets/imageDefault.png" />
      <p>{name.toUpperCase()}</p>
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
    </CardContainer>
  );
}
export default Card;
