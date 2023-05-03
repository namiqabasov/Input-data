const myForm = document.querySelector(".myForm");
const edit = document.querySelector(".edit");

const myInput = document.querySelector(".myInput");
const myDiv = document.querySelector(".myDiv");
const yeni = document.querySelector(".yeni");
const btn = document.querySelector(".btn");
let deyisen;

myForm.addEventListener("submit", function (e) {
  if (myInput.value === "") {
    alert("yazi daxil edin");
    return;
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

    divRemov.addEventListener("click", function () {
      yeniDiv.remove();
    });

    divEdit.addEventListener("click", function () {
      myInput.value = myValue.innerHTML;
      if (edit.innerHTML === "") {
        edit.appendChild(btnEdit);
      } else {
        edit.innerHTML = "";
        edit.appendChild(btnEdit);
      }

      btnEdit.addEventListener("click", function () {
        myValue.innerHTML = myInput.value;
        btnEdit.remove();
        myInput.value = "";
      });
    });

    myInput.value = "";

    e.preventDefault();
  }
});
