const { getaccessToken, options } = require('./helpers')

;(async function main () {
  try {
    const auth = await getaccessToken(options)
    console.log(auth)
  }
  catch(err){
    console.log(err)
  }
})();