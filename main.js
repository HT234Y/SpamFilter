let fs = require('fs');

let wordsData = {ham: {}, spam: {}};
let totalAmount = null;
let totalSpamLines = 0;
let totalHamLines = 0;

let lines = fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(line => {
        let category = line.split(',')[0];
        if (category === 'spam') totalSpamLines++;
        else if (category === 'ham') totalHamLines++;

        let text = line.substring(category.length + 1).toLowerCase();
        let words = text
            .replace(/[^A-Z' ]+/ig, ' ')
            .trim()
            .split(/\s+/)
            .reduce((finalDataObj, word) => {
                if (category === 'ham') {
                    if (Object.is(finalDataObj.ham[word], undefined)) {
                       finalDataObj.ham[word] = 0;
                       return finalDataObj;
                    }
                    finalDataObj.ham[word] += 1;
                    return finalDataObj;
                }
               
                if (category === 'spam') {
                    if (Object.is(finalDataObj.spam[word], undefined)) {
                        finalDataObj.spam[word] = 0;
                        return finalDataObj;    
                    }
                    finalDataObj.spam[word] += 1;
                    return finalDataObj; 
                }
                
            }, wordsData);   
    });
    totalAmount = Object.getOwnPropertyNames(wordsData.ham).length + Object.getOwnPropertyNames(wordsData.spam).length;

//callsminmoremobsemspoboxpowa