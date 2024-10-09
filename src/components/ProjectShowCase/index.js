import './index.css'

const ProjectShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details
  return (
    <li className="app-li">
      <img src={imageUrl} className="pic" alt={name} />
      <span className="name">{name}</span>
    </li>
  )
}

export default ProjectShowCase
