const addform = document.querySelector(".addform");
const inputname = document.querySelector("#name");
const surname = document.querySelector("#surname");
const password = document.querySelector("#password");
const passwordres = document.querySelector("#password");

let obj1 = {
  ilk: ["namiq", "abasov", `1232142`],
  ikinci: ["necef", "qasimzade", `2344235`],
};
localStorage.setItem("data", JSON.stringify(obj1));

addform.addEventListener("submit", function (e) {
  console.log("name :", inputname.value);
  e.preventDefault();
  console.log("surname :", surname.value);
  e.preventDefault();
  console.log("password :", password.value);
  e.preventDefault();
  console.log("password :", passwordres.value);
  e.preventDefault();
});

// password.addEventListener("input", function (e) {
//   passwordres.value = password.value;
// });

let arr = [];

if (JSON.parse(localStorage.getItem("dataBase")) !== null) {
  arr = JSON.parse(localStorage.getItem("dataBase"));
}
addform.addEventListener("submit", function (e) {
  const obj = {
    name: inputname.value,
    surname: surname.value,
    password: password.value,
  };

  arr.push(obj);
  if (
    obj.name !== obj1.ilk[0] &&
    obj.surname !== obj1.ilk[1] &&
    obj.password !== obj1.ilk[2]
  ) {
    alert("telebe tapilmadi");
  } else {
    alert("telebe tapildi");
  }
  localStorage.setItem("data", JSON.stringify(obj));
  e.preventDefault();
});
