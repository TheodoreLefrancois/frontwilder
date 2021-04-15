import styled from "styled-components";
const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: rgba(252, 165, 165, var(--tw-border-opacity));
  justify-content: center;
`;
const SkillTitle = styled.p`
  padding-right: 0.5rem;
`;
const SkillVote = styled.p`
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(239, 68, 68, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  width: 1.25rem;
  text-align: center;
`;
function SkillsMapping({ title, votes }) {
  return (
    <SkillsContainer>
      <SkillTitle>{title}</SkillTitle>
      <SkillVote>{votes}</SkillVote>
    </SkillsContainer>
  );
}
export default SkillsMapping;
