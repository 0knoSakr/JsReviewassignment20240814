const people3 = [
  { name: "John", age: 34 },
  { name: "Emma", age: 28 },
  { name: "Tom", age: 23 },
  { name: "Sophia", age: 32 },
  { name: "Lucas", age: 19 },
];
let thirtyBtn = document.getElementById("agethirty");
let thirtyPut = document.getElementById("thirtyput");

//画面表示したときに表示する
document.addEventListener("DOMContentLoaded", () => {
  people3.forEach((pleVal) => {
    let thirtyText = `<td>${pleVal.name}</td><td>${pleVal.age}</td>`;
    thirtyPut.insertAdjacentHTML("beforeend", thirtyText);
  });
});

thirtyBtn.addEventListener("click", () => {
  while (thirtyPut.firstChild) {
    thirtyPut.removeChild(thirtyPut.firstChild);
  }

  let allThirty = people3.filter(function (pleVal) {
    return pleVal.age >= 30;
  });

  allThirty.forEach((pleVal) => {
    let thirtyText = `<td>${pleVal.name}</td><td>${pleVal.age}</td>`;
    thirtyPut.insertAdjacentHTML("beforeend", thirtyText);
  });
});
