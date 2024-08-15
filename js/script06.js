const people6 = [
  { name: 'John', age: 34 },
  { name: 'Emma', age: 28 },
  { name: 'Tom', age: 23 },
  { name: 'Sophia', age: 32 },
  { name: 'Lucas', age: 19 }
];
let littleBtn = document.getElementById("littlebtn");
let littlePut = document.getElementById("littleput");
document.addEventListener("DOMContentLoaded", () => {
  people6.forEach((value) => {
    let littleList = `<td>${value.name}</td><td>${value.age}</td>`;
    littlePut.insertAdjacentHTML("beforeend", littleList);
  });
});

littleBtn.addEventListener("click", () => {
  while (littlePut.firstChild) {
    littlePut.removeChild(littlePut.firstChild);
  };
  let littleSort = people6.sort((a, b) => {
    if (a.name.length > b.name.length) {
      return 1
    } else {
      return -1;
    }
  });
  littleSort.forEach((value) => {
    littlePut.insertAdjacentHTML("beforeend", `<td>${value.name}</td><td>${value.age}</td>`);
  });
});
