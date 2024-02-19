function task1(fulfill,reject){
    console.log('Task1 시작');
    setTimeout(function(){
        fulfill('Task1 결과')
    },3000);
    console.log('Task1 끝, num');
}

function fulfilled(result){
    console.log('fulfilled : ', result);
}

function rejected(err){
    console.log('rejected : ', err)
}

new Promise(task1).then(fulfilled)