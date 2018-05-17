let fs = require('fs');
fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(line => {
        line = line.split(' ').forEach(word => {
            word.toLowerCase().replace(/[^\w\s]/gi, '');
        });
    });