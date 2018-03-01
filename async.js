const fetch = require('node-fetch')

async function main () {
  const ip = await getIp()
  console.log(ip)
}

async function getIp () {
  const res = await fetch('https://ifconfig.co/ip')
  const body = await res.text()
  return body
}

main()
  .catch(console.log)
