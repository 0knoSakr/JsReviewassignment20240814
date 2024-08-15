const people7 = [
  { name: 'John', age: 34 },
  { name: 'Emma', age: 28 },
  { name: 'Tom', age: 23 },
  { name: 'Sophia', age: 32 },
  { name: 'Lucas', age: 19 }
];
let youngBtn = document.getElementById("youngbtn");
let youngPut = document.getElementById("youngput");
people7.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  } else {
    return -1;
  };
});
document.addEventListener("DOMContentLoaded", () => {
  people7.forEach((value) => {
    youngPut.insertAdjacentHTML("beforeend", `<td>${value.name}</td><td>${value.age}</td>`);
  });
});
youngBtn.addEventListener("click", () => {
  while (youngPut.firstChild) {
    youngPut.removeChild(youngPut.firstChild);
  }
  let youngPerson = people7[0];
  let youngTd = `<td>${youngPerson.name}</td><td>${youngPerson.age}</td>`;
  youngPut.insertAdjacentHTML("beforeend", youngTd);
})
