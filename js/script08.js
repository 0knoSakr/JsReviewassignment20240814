const people8 = [
  { name: 'John', age: 34 },
  { name: 'Emma', age: 28 },
  { name: 'Tom', age: 23 },
  { name: 'Sophia', age: 32 },
  { name: 'Lucas', age: 19 }
];
let oldBtn = document.getElementById("oldbtn");
let oldPut = document.getElementById("oldput");
people8.sort((a, b) => b.age - a.age);
document.addEventListener("DOMContentLoaded", () => {
  people8.forEach((value) => {
    oldPut.insertAdjacentHTML("beforeend", `<td>${value.name}</td><td>${value.age}</td>`);
  });
});
oldBtn.addEventListener("click", () => {
  while (oldPut.firstChild) {
    oldPut.removeChild(oldPut.firstChild);
  }
  let oldPerson = people8[0];
  console.log(oldPerson);
  oldPut.insertAdjacentHTML("beforeend", `<td>${oldPerson.name}</td><td>${oldPerson.age}</td>`);
});
