import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo,name, role, description1, description2, resume, social } = about

  return (
    <div className='about center'>
      {photo && (
       <img className='about__img' height="200px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc1'>{description1 && description1}</p>
      <p className='about__desc2'>{description2 && description2}</p>


      <div className='about__contact center'>
        {resume && (
          <a target="_blank" rel="noopener noreferrer" href={resume}>
            <span type='button' className='btn btn--outline'>
             Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a target="_blank" rel="noopener noreferrer"
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a target="_blank" rel="noopener noreferrer"
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
