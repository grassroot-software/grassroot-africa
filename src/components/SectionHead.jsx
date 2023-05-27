
const SectionHead = ({icon, title, className}) => {
  return (
    <div className= {`section__head ${className}`}>
        <span>{icon}</span>
        <h3>{title}</h3>
    </div>
  )
}

export default SectionHead