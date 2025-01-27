function SkillList({src, skillName}) {
  return (
    <span>
            <img src={src} alt="Checkmark icon"/>
            <p>{skillName}</p>
    </span>
  )
}

export default SkillList