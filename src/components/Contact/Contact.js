import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { contact, about } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  const { social } = about
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p>Email : pavanambulkar2@gmail.com</p>
      <p>Contact No : +91 9730212184</p>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={social.github}
          aria-label='github'
          className='link link--icon_git'
        >
          <GitHubIcon />
        </a>

        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>

        <a
          target='_blank'
          rel='noopener noreferrer'
          href={social.linkedin}
          aria-label='linkedin'
          className='link link--icon_linkdin'
        >
          <LinkedInIcon />
        </a>
      </div>
    </section>
  )
}

export default Contact
