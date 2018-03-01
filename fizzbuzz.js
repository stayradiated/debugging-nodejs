function fizz () {
  console.log('fizz')
}

function buzz () {
  console.log('buzz')
}

function fizzbuzz () {
  console.log('fizzbuzz')
}

for(let i = 0; true; i++) {
  if (i % 15 === 0) {
    fizzbuzz()

  } else if (i % 5 === 0) {
    buzz()

  } else if (i % 3 === 0) {
    fizz()
  }
}
