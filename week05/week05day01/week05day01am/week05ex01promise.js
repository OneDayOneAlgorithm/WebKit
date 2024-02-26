const fs = require('fs');

function task() {
    console.log("1. 할 일");
    return new Promise(function (fulfill, reject){
        try {
            //fs.readFile("text.txt");
            fulfill();
        } catch {
            reject();
        }
    });
}

function fulfill() {
    console.log('2. 성공!');
}

function reject() {
    console.log('3. 실패!');
}

task().then(fulfill, reject);

