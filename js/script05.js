const people5 = [
  { name: "John", age: 34 },
  { name: "Emma", age: 28 },
  { name: "Tom", age: 23 },
  { name: "Sophia", age: 32 },
  { name: "Lucas", age: 19 },
];
let allBtn = document.getElementById("allbtn");
let allPut = document.getElementById("allput");
document.addEventListener("DOMContentLoaded", () => {
  people5.forEach((value) => {
    let list = `<td>${value.name}</td><td>${value.age}</td>`;
    allPut.insertAdjacentHTML("beforeend", list);
  });
});

allBtn.addEventListener("click", () => {
  while (allPut.firstChild) {
    allPut.removeChild(allPut.firstChild);
  }
  let allFilter = people5.filter((value) => value.age >= 25 && value.age <= 35);
  allFilter.forEach((value) => {
    let allList = `<td>${value.name}</td><td>${value.age}</td>`;
    allPut.insertAdjacentHTML("beforeend", allList);
  });
});
