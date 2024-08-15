const people2 = [
  { name: "John", age: 34 },
  { name: "Emma", age: 28 },
  { name: "Tom", age: 23 },
  { name: "Sophia", age: 32 },
  { name: "Lucas", age: 19 },
];
//課題 2: オブジェクト配列の文字列ソート
//ボタン
let nameBtn = document.getElementById("namebtn");
//テーブル
let namePut = document.getElementById("nameput");

document.addEventListener("DOMContentLoaded", () => {
  people.forEach((pple) => {
    let textName = `<td>${pple.name}</td><td>${pple.age}</td>`;
    namePut.insertAdjacentHTML("beforeend", textName);
  });
});

nameBtn.addEventListener("click", () => {
  //selectの情報
  //selectの情報が変わったときに情報を変えるかローカルスコープにしないと動かなくなる
  let nameList = document.getElementById("namelist");
  let nameListVal = nameList.value;
  //もともと入ってる子要素を消す
  while (namePut.firstChild) {
    namePut.removeChild(namePut.firstChild);
  }

  //ソートの結果を出すためだけの関数
  function nameSort(sort2) {
    sort2.forEach((pleVal) => {
      let nameTaxt = `<td>${pleVal.name}</td><td>${pleVal.age}</td>`;
      namePut.insertAdjacentHTML("beforeend", nameTaxt);
    });
  }//ソートをブラウザに出す最後尾

    //ここからソートする関数を描く
  //昇順
  if (nameListVal == "nameasc") {
    //ソート本体
    let ascSort2 = people2.sort((a, b) => a.name.localeCompare(b.name)); //ソート本体最後尾
    //ソートの機能と結果をブラウザに出すためにこの二つを包む関数を実行する
    nameSort(ascSort2);
  }

  //降順
  if (nameListVal == "namedesc") {
    //ソート本体
    let descSort2 = people2.sort((a, b) => b.name.localeCompare(a.name)); //ソート本体最後尾
    //ソートの機能と結果をブラウザに出すためにこの二つを包む関数を実行する
    nameSort(descSort2);
  }
}); //クリックイベント最後尾
