import { FaGithub } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const ProjectRight = ( { title, image, description, technologies, github, youtube } ) => {
  return (
    <div className='project' style={{ marginLeft: '8%'}}>

      <div className='project-description-right'>
        <p className='project-header'>Featured Project:</p>
        <p style={{fontSize: '20px'}}>{title}</p>
        <div className='project-description-block-right'>{description}</div>

        <p className='project-header'>Technologies:</p>
        <p style={{color: '#A8B7BC', marginBottom: '2%'}}>{technologies}</p>

        <a href={github} target="_blank"><div style={{color: 'white'}}><FaGithub size={20}/></div></a>

      </div>

      <div className='project-image'><figure className="tint">
        <a href={github} target="_blank"><img src={image} className='project-image-round'/></a>
      </figure></div>


    </div>
  )
}

export default ProjectRight
