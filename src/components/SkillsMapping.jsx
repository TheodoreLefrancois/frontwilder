function SkillsMapping({ title, votes }) {
  return (
    <div className="flex flex-row border-2 border-red-300 justify-center">
      <p className="pr-2">{title}</p>
      <p className="rounded-full bg-red-500 text-white w-5 text-center">
        {votes}
      </p>
    </div>
  );
}
export default SkillsMapping;
