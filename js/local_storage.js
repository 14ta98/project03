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
  $("#todoCtrl").click(
    // コールバックとしてメソッドを引数にわたす
    function() {
      saveText();
      showText();
    });
}

// 入力された内容をローカルストレージに保存する
function saveText() {
  // 時刻をキーにして入力されたテキストを保存する
  var text = $("#taskText");
  var time = new Date();
  localStorage.setItem(time, text.val());
  // テキストボックスを空にする
  text.val("");
}

// ローカルストレージに保存した値を再描画する
function showText() {
  // すでにある要素を削除する
  var list = $("#list")
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