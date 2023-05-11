
// シャッフルスピード
var speed = 100;

// カラーシャッフル
var randShuffle = function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  $(".circle1").css("background", "rgb(" + r + "," + g + ", " + b + " )");
};

// スタートボタン押す
$(".start").on("click", function () {
  randStart = setInterval(randShuffle, speed);
  $(this).hide();
  $(".stop").show();
});

// ストップボタン押す
$(".stop").on("click", function () {
  clearInterval(randStart);
  $(this).hide();
  $(".restart").show();
  // もう一度表示
});

// もう一度ボタン押す
$(".restart").on("click", function () {
  $(this).hide();
  $(".stop").show();
  // ストップ表示
  randStart = setInterval(randShuffle, speed);
  // シャッフル再開
});
