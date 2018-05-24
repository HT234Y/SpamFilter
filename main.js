let fs = require('fs');
fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(line => {
        let category = line.split(',')[0];
        line.substring(category.length + 1)
            .toLowerCase()
            .replace(/[^A-Z' ]+/ig, ' ')
            .replace(/\s\s+/g, ' ')
            .trim()
            .split(' ')
            .forEach(word => console.log(word))
        
            
    });

//callsminmoremobsemspoboxpowa