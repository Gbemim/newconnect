import bcrypt from 'bcryptjs'
const dataprofiles = [
  {
    name: 'Gbemi',
    image: 'images/img1.jpg',
    about: 'This is a test run',
    password: bcrypt.hashSync('abc1234', 10),
    isBusy: false,
    isAdmin: true
  },

  {
    name: 'Mary',
    image: 'images/img2.jpg',
    about: 'This is a test run2',
    isBusy: false,
    password: bcrypt.hashSync('abc1234', 10)
  },

  {
    name: 'Lisa',
    image: 'images/img3.jpg',
    about: 'This is a test run3',
    isBusy: false,
    password: bcrypt.hashSync('abc1234', 10)
  },
]

export default dataprofiles
