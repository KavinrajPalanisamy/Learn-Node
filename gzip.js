var fs = require('fs');
var gzip = require('gzip');
const zlib = require('zlib');
var readstream = fs.createReadStream('kalima.js', 'base64');
var writeStream = fs.createWriteStream('PIPE_writtenStreamFile.txt.gz');

// readstream.on("data", (junk)=> {
//     writeStream.write(junk)
// });

readstream.pipe(writeStream)






