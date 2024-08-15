const people4 = [
  { name: "John", age: 34 },
  { name: "Emma", age: 28 },
  { name: "Tom", age: 23 },
  { name: "Sophia", age: 32 },
  { name: "Lucas", age: 19 },
];
let oBtn = document.getElementById("obtn");
let oPut = document.getElementById("oput");
document.addEventListener("DOMContentLoaded", () => {
  people4.forEach((pleVal) => {
    let oText = `<td>${pleVal.name}</td><td>${pleVal.age}</td>`;
    oPut.insertAdjacentHTML("beforeend", oText);
  });
});
oBtn.addEventListener("click", () => {
  while (oPut.firstChild) {
    oPut.removeChild(oPut.firstChild);
  }

  let oFilter = people4.filter((person) => person.name.includes('o'));
  oFilter.forEach((person) => {
    let oText = `<td>${person.name}</td><td>${person.age}</td>`;
    oPut.insertAdjacentHTML("beforeend", oText);
  });
});
