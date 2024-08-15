const people10 = [
  { name: 'John', age: 34 },
  { name: 'Emma', age: 28 },
  { name: 'Tom', age: 23 },
  { name: 'Sophia', age: 32 },
  { name: 'Lucas', age: 19 }
];
let deleteBtn = document.getElementById("deletebtn");
let deleteData = document.getElementById("deletetable");
document.addEventListener("DOMContentLoaded", () => {
  people10.forEach((value) => {
    deleteData.insertAdjacentHTML("beforeend", `<td>${value.name}</td><td>${value.age}</td>`);
  })
})
deleteBtn.addEventListener("click", () => {
  let delFilter = people10.filter((value) => {
    return value.name !== "Tom";
  });
  while (deleteData.firstChild) {
    deleteData.removeChild(deleteData.firstChild);
  };
  delFilter.forEach((value) => {
    deleteData.insertAdjacentHTML("beforeend",  `<td>${value.name}</td><td>${value.age}</td>`);
  })
})
