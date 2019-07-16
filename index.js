const fs = require('fs')
const Web3 = require('web3')

let arg;
arg = Number.parseInt(process.argv[2])
const n = Number.isInteger(arg) ? arg : 0
arg = process.argv[3]
const p = typeof arg === 'string' ? arg : ''

const web3 = new Web3()

for (let i = 0; i < n; i++) {
  const account = web3.eth.accounts.create()
  const keystore = [account.encrypt(p)]
  const filename = `${keystore[0].id}.json`
  try {
    fs.writeFileSync(filename, JSON.stringify(keystore))
    console.log(filename)
  } catch(e) {
    console.error(e)
  }
}