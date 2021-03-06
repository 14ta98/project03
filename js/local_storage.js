// keyに対応するvalueを取得する
localStorage.getItem(key);

// keyに対応するvalueを保存する
localStorage.setItem(key, value);

// keyに対応するvalueを削除する
localStorage.removeItem(key);

// ローカルストレージに保存されたデータ数を取得する
localStorage.length;

// ローカルストレージのインデックスからkeyを取得する
localStorage.key();

// ローカルストレージに保存したすべてのデータを削除する
localStorage.clear();


$(loaded);

function loaded() {
  showText();
  // ボタンをクリックしたときに実行するイベントを設定する
  $(".todoCtrl").click(
    // コールバックとしてメソッドを引数にわたす
    function() {
      saveText(if(checkText(text.val())) { /* ローカルストレージに保存する処理 */ });
      showText();
    });
}

// 入力された内容をローカルストレージに保存する
function saveText(if(checkText(text.val())) { /* ローカルストレージに保存する処理 */ }) {
  // 時刻をキーにして入力されたテキストを保存する
  var text = $(".taskText");
  var time = new Date();
  localStorage.setItem(time, text.val());
  // テキストボックスを空にする
  text.val("");
}

// ローカルストレージに保存した値を再描画する
function showText() {
  // すでにある要素を削除する
  var list = $(".task in tasks")
  list.children().remove();
  // ローカルストレージに保存された値すべてを要素に追加する
  var key, value, html = [];
  for(var i=0, len=localStorage.length; i<len; i++) {
    key = localStorage.key(i);
    value = localStorage.getItem(key);
    html.push("<p>" + value + "</p>");
  }
  list.append(html.join(''));
}

var val = escapeText(text.val());
if(checkText(val)) {
  localStorage.setItem(time, escape(val));
  // テキストボックスを空にする
  text.val("");
}

// 文字をエスケープする
function escapeText(text) {
  return $("<div>").text(text).html();
}

// 入力チェックを行う
function checkText(text) {
  // 文字数が0または20以上は不可
  if (0 === text.length || 20 < text.length) {
    alert("文字数は1〜20字にしてください");
    return false;
  }

  // すでに入力された値があれば不可
  var length = localStorage.length;
  for (var i = 0; i < length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    // 内容が一致するものがあるか比較
    if (text === value) {
      alert("同じ内容は避けてください");
      return false;
    }
  }

  // すべてのチェックを通過できれば可
  return true;
}