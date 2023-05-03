"use strict";

let arr = [7, 55, 32, 91, 87, 21, 74, 252, 2, -6, 42, 15, -41];
//!!!!!!!!!!!!!!!!!!!!!!! 1-ci
console.log("cut elementler");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}

//!!!!!!!!!!!!!!!!!!!!!!! 2-ci

console.log("tek elementler");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}
//!!!!!!!!!!!!!!!!!!!!!!! 3-ci

console.log("menfi elemetler");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    console.log(arr[i]);
  }
}
//!!!!!!!!!!!!!!!!!!!!!!! 4-ci

console.log("elementlerin iki qati");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);
}
//!!!!!!!!!!!!!!!!!!!!!!! 5-ci

console.log("40 dan boyuk elementler");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 40) {
    console.log(arr[i]);
  }
}
