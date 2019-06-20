const fs = require('fs')
const Web3 = require('web3')

let arg;
arg = Number.parseInt(process.argv[2])
const n = Number.isInteger(arg) ? arg : 0
arg = process.argv[3]
const p = typeof arg === 'string' ? arg : ''

const web3 = new Web3()
const index = web3.eth.accounts.wallet.create(n).accountsIndex

for (let i=0; i<index; i++) {
  const account = web3.eth.accounts.wallet.get(i)
  const keystore = account.toV3Keystore(p)
  const filename = `${keystore.id}.json`
  try {
    fs.writeFileSync(filename, JSON.stringify([keystore]))
    console.log(filename)
  } catch(e) {
    console.error(e)
  }
}
