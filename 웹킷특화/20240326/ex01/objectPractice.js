const studentList = [
    {id : 1, name: "홍길동", school:"금오공과대학교"},
    {id : 5, name: "김길동", school:"경북대학교"},
    {id : 7, name: "박길동", school:"경북대학교"},
    {id : 8, name: "이길동", school:"금오공과대학교"},
    {id : 10, name: "정길동", school:"계명대학교"},
    {id : 11, name: "방길동", school:"계명대학교"},
    {id : 12, name: "성길동", school:"금오공과대학교"},
    {id : 20, name: "장길동", school:"서울대학교"},
    {id : 22, name: "마길동", school:"금오공과대학교"},
    {id : 23, name: "황길동", school:"영남대학교"},
]

const studentDetail = {
    id : 5,
    name : "김길동",
    school : "경북대학교",
    grade : "2학년",
    schoolNum : "20201010",
    scores : [
        {semester:"1학년 1학기", score:3.5},
        {semester:"1학년 2학기", score:3.2},
        {semester:"2학년 1학기", score:4.1},
        {semester:"2학년 2학기", score:4.3},
        {semester:"3학년 1학기", score:4.5},
        {semester:"3학년 2학기", score:4.5},
        {semester:"4학년 1학기", score:3.5},
        {semester:"4학년 2학기", score:2.5},
    ]
}

console.log(Object.keys(studentDetail))
console.log(Object.values(studentDetail))
console.log(Object.entries(studentDetail))
console.log(Object.fromEntries(Object.entries(studentDetail)))