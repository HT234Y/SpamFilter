let fs = require('fs');
fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(line => {
        let category = line.split(',')[0];
        line = line.split(' ').forEach(word => {
            console.log(word.toLowerCase().replace(/spam|ham|[^A-Z]+/ig, '').replace(/\s+/, ''));
        });
    });
