// built-in modules

const os = require('os')       // we dont do ('./') when calling module properties

// info abt curr user

// const user = os.userInfo();
console.log(os.userInfo());

// method return uptime in seconds

console.log(`the system uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()
}

console.log(currentOS);