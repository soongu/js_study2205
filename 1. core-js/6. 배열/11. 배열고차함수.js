
const arr = [1,2,3,4,5,6,7,8,9,10];

// forEach : 단순 소비
arr.forEach(n => {
    console.log(n);
});

// filter : 조건 콜백함수에 맞게 필터링
const evenArr = arr.filter(n => n % 2 === 0);
console.log(evenArr);

// map : 조건 콜백함수에 맞게 새롭게 매핑해서 리턴
const powArr = arr.map(n => n ** 2);
console.log(powArr);