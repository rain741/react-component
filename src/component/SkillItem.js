function SkillItem(props) {
  let { skill } = props;
  console.log(skill);
  return (
    <div className="skills-item" onClick={() => alert(skill.name)}>
      <img src={skill.img} alt="foto skills" width="100px" />
      <h3>{skill.name}</h3>
    </div>
  );
}

export default SkillItem;
