let fs = require('fs');
fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(line => {
        let category = line.split(',')[0];
        let text = line.substring(category.length + 1).toLowerCase();
        let words = text
            .replace(/[^A-Z' ]+/ig, ' ')
            .trim()
            .split(/\s+/);
        
        console.log(words);    
    });

//callsminmoremobsemspoboxpowa