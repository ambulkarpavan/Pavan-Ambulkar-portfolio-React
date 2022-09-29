import aboutpic from "./components/Access/pavanPhoto.jpg"
import expediapic from "./components/Access/expedia.png"
import nykaapic from "./components/Access/Nykaa.png"
import calendlypic from "./components/Access/Calendly.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'Home',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'PAVAN AMBULKAR',
  role: 'Full stack Web developer',
  description1:
  "A hard-working and self-motivated Full Stack Web Developer with proficiency in MERN Stack, Data structure, and Algorithms. Problem-solving mindset and ability to perform well in collaboration.",
    // "Passionate about coding and eager to learn newthings. Having knowledge of MERN Stack, HTML, CSS,JavaScript, Data structure and Algorithms and ready to code with it." ,
    description2:
    "Looking forward to working as an accountable and competent employee in an exciting tech company.",
    // "Looking Forward to join an organization where I will be able to exhibit my skills with utmost sincerity and hardwork for the growth of your esteemed organization along with mine.",
  resume: 'https://drive.google.com/file/d/1pEhJGbk8y4AR-K2qI5qWPPO_BICRBd1S/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/pavanambulkar/',
    github: 'https://github.com/ambulkarpavan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Clone of Calendly.com',
    image:calendlypic,
    description:
      'This is a clone of Calendly.com it arrange and scheduel meetings for users. It was a group project. I worked on design, individual page, and Event Creation page.',
    stack: ["React", "Redux",'HTML', 'CSS','Javascript', "JSON", 'GitHub'],
    sourceCode: 'https://github.com/akashbhoi2815/parallel-cast-7381',
    livePreview: 'https://calendl-yparallel-cast-7381.vercel.app/',
  },
  {
    name: 'Clone of Expedia.com',
    image:expediapic,
    description:
      'This is a clone of Expedia.com an travel related website. It was a group project. I worked on Home page, Login and Signup page.',
    stack: ['localstorage', 'HTML', 'CSS','Javascript', 'API', 'GitHub'],
    sourceCode: 'https://github.com/vishnu9651/Expedia-clone',
    livePreview: 'https://expedia-travels-clone.netlify.app/',
  },
  {
    name: 'Clone of Nykaa.com',
    image:nykaapic,
    description: 
      'This is a clone of Nykaa.com an ecommerce beauty related website. It was a group project. I worked on Home page, payment details page, Login and Signup page.',
    stack: ['localstorage', 'HTML', 'CSS','Javascript', 'GitHub'],
    sourceCode: 'https://github.com/faisal1205/Nykaa-Clone-Project',
    livePreview: 'https://nykaa-clone-ecommerce.netlify.app/',
  },
  
 
]

const skills1 = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  
  // 'Express',
  // 'MySQL',
  // 'MongoDB',
  'React',
  'Redux',
  'Chakra UI',
  // 'Material UI',
  // 'Git',
  // 'MERN',
]

const skills2 = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
 'Node js',
  'Express',
 
  'MongoDB',
  'JSON',
  // 'Material UI',
  'GitHub',
  // 'MERN',
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pavanambulkar2@gmail.com',
}

export { header, about, projects, skills1, skills2, contact }
