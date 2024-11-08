import resume from  '../pdf/resume-JustinZiegler-2024.pdf'
const githubUrl = 'https://github.com/justinziegler/jz.com-react'

const navLinks = [
  {
    title: 'Github',
    link: githubUrl,
    target: '_blank',
    class: 'gh'
  },
  {
    title: 'Resume',
    link: resume,
    target: '_blank',
    class: 'resume'
  },
  {
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/jzieglersb',
    target: '_blank',
    class: 'li'
  },
  {
    title: 'Email',
    email: 'justin.ziegler@gmail.com',
    link: 'mailto:justin.ziegler@gmail.com',
    target: '',
    class: 'email'
  }
]

export { githubUrl, navLinks }