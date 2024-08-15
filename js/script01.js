const people = [
  { name: "John", age: 34 },
  { name: "Emma", age: 28 },
  { name: "Tom", age: 23 },
  { name: "Sophia", age: 32 },
  { name: "Lucas", age: 19 },
];
//課題 1: オブジェクト配列の数値ソート
//ボタンの情報の取得
let ageBtn = document.getElementById("agebtn");
//ソートの結果を入れるところの情報の取得tbody
let agePut = document.getElementById("ageput");

//ページを読み込んだ時に表示させるためだけ
document.addEventListener("DOMContentLoaded", () => {
  people.forEach((pleVal) => {
    let ageText = `<td>${pleVal.name}</td><td>${pleVal.age}</td>`;
    agePut.insertAdjacentHTML("beforeend", ageText);
  });
});

//clickしたら処理する関数
ageBtn.addEventListener("click", function () {
  //もともとテーブルに入ってるデータを消す記述
  //クリックしてから消さないと内容がどんどん増えていく
  while (agePut.firstChild) {
    agePut.removeChild(agePut.firstChild);
  }
  //selectの情報の取得
  let ageList = document.getElementById("agelist");
  //selectのvalueの情報取得
  let ageListVal = ageList.value;
  // console.log(ageListVal); //関数の動作確認console.log

  //ソート機能
  //ソートの結果をブラウザに出すためのだけのものconsol.logで何も出てこない
  //ブラウザに結果を出したいソートに書かないと意味がない
  function ageSort(sort) {
    sort.forEach((pleVal) => {
      let ascText = `<td>${pleVal.name}</td><td>${pleVal.age}</td>`;
      agePut.insertAdjacentHTML("beforeend", ascText);
    });
  };
  //昇順ソート
  //selectのvalueとselectの中のoptionのvalueの中身を比較している
  //selectのvalueとselectの中のoptionのvalueの中身が一致した場合
  if (ageListVal == "ageasc") {
    //ソートをする記述
    let ascSort = people.sort((a, b) => {
      return a.age - b.age;
    });
    //ソートの結果をだすところ書き出すためだけの関数名ageSort
    //ソートの処理をしただけの変数ascSortを合体させてブラウザに出す
    //関数を実行するには関数名(変数名等)
    ageSort(ascSort);
  }

  //降順
  if (ageListVal == "agedesc") {
    let descSort = people.sort((a, b) => {
      return b.age - a.age;
    });
    ageSort(descSort);
  }
});
