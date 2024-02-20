const path = require('path');

// 파일 경로 조작
const filePath = path.join(__dirname, 'files', 'example.txt');
console.log('File Path:', filePath);

// 상대 경로 계산
const relativePath = path.relative('/home/user', '/home/user/documents');
console.log('Relative Path:', relativePath);

// 확장자 추출
const extension = path.extname('example.txt');
console.log('File Extension:', extension);