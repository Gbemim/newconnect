import bcrypt from 'bcryptjs'
const dataprofiles = [
  {
    name: 'Gbemi',
    image: 'images/img1.jpg',
    about: 'This is a test run',
    password: bcrypt.hashSync('abc1234', 10),
    isAdmin: true
  },

  {
    name: 'Mary',
    image: 'images/img2.jpg',
    about: 'This is a test run2',
    password: bcrypt.hashSync('abc1234', 10)
  },

  {
    name: 'Lisa',
    image: 'images/img3.jpg',
    about: 'This is a test run3',
    password: bcrypt.hashSync('abc1234', 10)
  },
]

export default dataprofiles
