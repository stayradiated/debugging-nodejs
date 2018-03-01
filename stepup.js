const random = require('random-name')

function main () {
  const name = getName()
  const day = new Date().getDay()
  const dayName = getDayName(day)
  welcome(name, dayName)
}

function getName () {
  const name = random.first()
  return name
}

function getDayName (day) {
  const name = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  return name[day]
}

function welcome (name, day) {
  const message = `Hello ${name}, today is ${day}`
  console.log(message)
}

main()
