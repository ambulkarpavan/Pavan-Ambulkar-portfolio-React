import uniqid from 'uniqid'
import { skills1, skills2 } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills1.length) return null
  if (!skills2.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <div style={{display:"flex", justifyContent:"space-evenly", textAlign:"center"}}>
      <div >
        <h3 >Frontend</h3>
      <ul className='skills__list'>
        {skills1.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      </div>
      <div>
      <h3 >Backend</h3>
      <ul className='skills__list'>
        {skills2.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
      </div>
      </div>
    </section>
  )
}

export default Skills
