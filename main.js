const os = require('process');
const fs = require('fs');
const write = require('./lib/write');
const remove = require('./lib/remove');

if (process.argv[2] === '.') {

    remove.remove(process.argv[3]);
} else {
    write.write(process.argv[2]);
    if (process.argv[3]) {
        remove.remove(process.argv[3]);
    }
}