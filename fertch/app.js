const myToo = document.querySelector(".myToo");
const myInput = document.querySelector(".myInput");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let i = 0;
  myToo.innerHTML = "";
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        if (
          myInput.value[0] === element.name.common[0] &&
            myInput.value[1] === element.name.common[1]
        ) {
          i++;
          YeniElement(element, i);
          console.log(element.flags.png);
        } else if (myInput.value[0] === element.name.common[0]&&!myInput.value[1]) {
          i++;
          YeniElement(element, i);
          console.log(element.flags.png);
        }else if(myInput.value===""){
          i++;
          YeniElement(element, i);
          console.log(element.flags.png);
        }
      });
    });

    

  function YeniElement(data, i) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const img = document.createElement("img");
    const button = document.createElement("button");
    button.innerText = "SIL";
    button.addEventListener("click", function () {
      tr.remove();
    });
    td4.append(img);
    img.src = data.flags.png;
    td1.innerHTML = i;
    td2.innerText = data.name.common;
    td3.innerText = data.capital;
    tr.append(td1, td2, td3, td4, button);
    myToo.append(tr);
  }
});
