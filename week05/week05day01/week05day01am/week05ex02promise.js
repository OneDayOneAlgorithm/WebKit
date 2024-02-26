function task1(fullfill, reject) {
    var num = 0;
    console.log('Task1 시작');
    setTimeout(function() {
        num = 1004;
        fullfill('Task1 결과:' + num);
    }, 300);
    console.log('Task1 끝', num);
}

function fullfilled(result) {
    console.log('fullfiled : ', result);
}

function rejected(err) {
    console.log('rejected : ', err);
}

new Promise(task1).then(fullfilled, rejected);
