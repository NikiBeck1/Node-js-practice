const path = require('path');
const fs = require('fs');

let chirps = (path.join(__dirname, '../chirps.json'));

fs.readFile(chirps, {
    encoding: "utf-8"
}, (err, chirp) => {
    console.log(chirp)
})
