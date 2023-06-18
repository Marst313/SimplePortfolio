import { Fb, Ig, Github, Dc } from '../assets/svg';
import { bootstrap, css, github, html, react, tailwind } from '../assets/others';

export const socialLinks = [
  { id: 1, name: 'Facebook', link: 'https://www.facebook.com/dharmarst', logo: Fb },
  { id: 2, name: 'Instagram', link: 'https://www.instagram.com/inyoman_dharma/', logo: Ig },
  { id: 3, name: 'Github', link: 'https://github.com/Marst313', logo: Github },
  { id: 4, name: 'Discord', link: 'https://discord.com/channels/593701786926186496/904630787205390346', logo: Dc },
];

export const skillLinks = [
  { id: 1, name: 'Html', logo: html, type: 'Front End' },
  { id: 2, name: 'Css', logo: css, type: 'Front End' },
  { id: 3, name: 'Tailwind', logo: tailwind, type: 'Front End' },
  { id: 4, name: 'Bootstrap', logo: bootstrap, type: 'Front End' },
  { id: 5, name: 'React', logo: react, type: 'Front End' },
  { id: 6, name: 'Github', logo: github, type: 'Version Control' },
];

export const experienceData = [
  {
    id: 1,
    title: 'Teaching assistant (TA) ',
    date: 'July - December 2022',
    text: ` As a TA,my role would typically include the following responsibilities is
    assisting students, facilitating lab activities, conducting review sessions`,
  },
  {
    id: 2,
    title: 'Design Slicing',
    date: '',
    text: '"Slicing design" refers to the process of converting a visual design or mockup into actual code. It involves breaking down the design elements into smaller components and implementing them using HTML, CSS, or a framework like Tailwind CSS.',
  },
];

export const educationData = [
  { id: 1, title: 'High School', date: 'August 2018 - August 2021', text: 'SHS 2 Wonogiri' },
  { id: 2, title: 'Bachelor Degree ', date: 'September 2021 - present', text: 'I am currently studying at Amikom Yogyakarta University in the field of computer science' },
];
