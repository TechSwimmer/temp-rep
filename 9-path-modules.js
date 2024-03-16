const path = require('path');
console.log(path.sep);              // return my platform specific separator

// which joins a sequence of path segments using platform specific separators as the limiter
// normalized resulting path

const filePath = path.join('/content','subfolder','test.txt')

console.log(filePath);

const base = path.basename(filePath);
console.log(base);


const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);