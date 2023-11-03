$(function () {
  //HTML要素が読み込まれたあと
  $(window).on('load', () => {
    console.log('loadイベントが発生しました');
  });
  //画面をスクロールしたとき
  $(window).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});