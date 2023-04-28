const myForm = document.querySelector(".myForm");
const edit = document.querySelector(".edit");

const myInput = document.querySelector(".myInput");
const myDiv = document.querySelector(".myDiv");
const yeni = document.querySelector(".yeni");
const btn = document.querySelector(".btn");
let arr = [];

myForm.addEventListener("submit", function (e) {
  if (myInput.value === "") {
    alert("yazi daxil edin");
  } else {
    const yeniDiv = document.createElement("div");
    const yeniDiv2 = document.createElement("div");

    const myValue = document.createElement("p");
    const divRemov = document.createElement("button");
    const divEdit = document.createElement("button");
    const btnEdit = document.createElement("button");
    yeniDiv.className = "yenidiv";
    yeniDiv2.className = "yenidiv2";

    divRemov.innerHTML = "DELETE";
    divEdit.innerHTML = "edit";
    btnEdit.innerHTML = "edit";

    myValue.innerHTML = myInput.value;

    yeniDiv.appendChild(myValue);
    yeniDiv2.appendChild(divEdit);

    yeniDiv2.appendChild(divRemov);
    yeniDiv.appendChild(yeniDiv2);
    myDiv.appendChild(yeniDiv);

    arr.push(myInput.value);
    console.log(arr);
    divRemov.addEventListener("click", function () {
      yeniDiv.remove();
    });
    if (edit.innerText !== "") {
      btnEdit.remove();
    } else {
      arr.forEach((e, i) => {
        divEdit.addEventListener("click", function () {
          myInput.value = arr[i];

          edit.appendChild(btnEdit);
          
          btnEdit.addEventListener("click", function () {
            myValue.innerHTML = myInput.value;
            btnEdit.remove();
            myInput.value = "";

          });
        });
      });
    }

    myInput.value = "";

    e.preventDefault();
  }
});
