function HobbiItem(props) {
  let { hobbies } = props;
  return (
    <div>
      <div className="hobby-item" onClick={() => alert(hobbies.name)}>
        <img src={hobbies.img} alt="foto hobi" width="100px" />
        <h3>{hobbies.name}</h3>
      </div>

      {/* <div className="skills-item" onClick={() => alert(skills.name)}>
        <img src={skills.img} alt="foto skills" width="100px" />
        <h3>{skills.name}</h3>
      </div> */}
    </div>
  );
}

export default HobbiItem;
