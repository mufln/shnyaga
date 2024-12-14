let Age = 148;
let Name = "Бондаренко Федор";
if (Age >= 18) {
    console.log("Лет много, можно все");
} else {
    console.log("Лет мало, нельзя ничего");
}

for(let i = 0; i < 10; i++) {
    console.log(i);
}

let c = 10;
while(c > 0) {
    console.log(c);
    c--;
}

let lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
let actices = ['Практика 1', 'Практика 2', 'Практика 3'];

lectures.push("Тема 4");
actices.unshift("Практика 4");

lectures.forEach(lecture => {
    console.log(lecture);
});

actices.forEach(actice => {
    console.log(actice);
});

lectures.push("Oaoaoammm")
let f = lectures.filter(lecture => {return lecture.includes('O');});
console.log(f);


