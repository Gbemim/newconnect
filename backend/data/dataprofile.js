import bcrypt from 'bcryptjs'
const dataprofiles = [
  {
    name: 'Gbemi',
    email: 'gbemi@mail.com',
    image: 'images/img1.jpg',
    about: 'This is a test run1',
    isLive: false,
    password: bcrypt.hashSync('abc1234', 10),
  },

  {
    name: 'Mary',
    email: 'mary@mail.com',
    image: 'images/img2.jpg',
    about: 'This is a test run2',
    isLive: false,
    password: bcrypt.hashSync('abc1234', 10),
  },

  {
    name: 'Lisa',
    email: 'lisa@mail.com',
    image: 'images/img3.jpg',
    about: 'This is a test run3',
    isLive: false,
    password: bcrypt.hashSync('abc1234', 10),
  },
]

export default dataprofiles
