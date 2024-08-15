const people9 = [
  { name: 'John', age: 34 },
  { name: 'Emma', age: 28 },
  { name: 'Tom', age: 23 },
  { name: 'Sophia', age: 32 },
  { name: 'Lucas', age: 19 }
];
let totalBtn = document.getElementById("totalbtn");
let totalTable = document.getElementById("totaltable");
let totalPut = document.getElementById("totalput");

document.addEventListener("DOMContentLoaded", () => {
  people9.forEach((value) => {
    totalTable.insertAdjacentHTML("beforeend", `<td>${value.name}</td><td>${value.age}</td>`);
  });
});

totalBtn.addEventListener("click", () => {
  let totalAge = 0;
  people9.forEach((value) => totalAge += value.age);
  //textboxはvalueで出てくる
  totalPut.value = totalAge;
});
